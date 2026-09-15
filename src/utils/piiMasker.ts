export interface MaskResult {
  maskedText: string;
  detectedItems: {
    type: 'NIK' | 'Nomor Rekening / Kartu' | 'Nomor Telepon' | 'Email';
    original: string;
    masked: string;
  }[];
}

export function maskSensitiveDataIndonesian(text: string): MaskResult {
  const detectedItems: MaskResult['detectedItems'] = [];
  let result = text;

  // 1. Indonesian NIK (16 consecutive digits)
  const nikRegex = /\b\d{16}\b/g;
  result = result.replace(nikRegex, (match) => {
    const masked = `${match.slice(0, 4)}********${match.slice(-4)}`;
    detectedItems.push({
      type: 'NIK',
      original: match,
      masked: `[NIK: ${masked}]`
    });
    return `[NIK: ${masked}]`;
  });

  // 2. Credit Card / Debit Card (16 digits with dashes or spaces)
  const cardRegex = /\b(?:\d{4}[-\s]?){3}\d{4}\b/g;
  result = result.replace(cardRegex, (match) => {
    const clean = match.replace(/[-\s]/g, '');
    if (clean.length === 16 && !detectedItems.some(item => item.original === clean)) {
      const masked = `****-****-****-${clean.slice(-4)}`;
      detectedItems.push({
        type: 'Nomor Rekening / Kartu',
        original: match,
        masked: `[KARTU: ${masked}]`
      });
      return `[KARTU: ${masked}]`;
    }
    return match;
  });

  // 3. Indonesian Phone (+62 or 08 followed by 8-11 digits)
  const phoneRegex = /(?:\+62|62|0)8[1-9][0-9]{7,10}/g;
  result = result.replace(phoneRegex, (match) => {
    const masked = `${match.slice(0, 4)}****${match.slice(-3)}`;
    detectedItems.push({
      type: 'Nomor Telepon',
      original: match,
      masked: `[TELP: ${masked}]`
    });
    return `[TELP: ${masked}]`;
  });

  return {
    maskedText: result,
    detectedItems
  };
}
