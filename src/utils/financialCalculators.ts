import { FinancialSimulation } from '../types';

export function calculateFinancialScenario(
  ratio: number,
  clients: number = 120,
  targetRevenue: number = 45.0
): FinancialSimulation {
  // Slide 4: SDM cost assumption Rp192 jt / employee / year (Rp145M base + 6% inflation + senior mix)
  const salaryPerEmployeeMillion = 192;
  const employees = Math.round(clients * ratio);
  const salaryCostBillion = (employees * salaryPerEmployeeMillion) / 1000;
  
  // Non-personnel operational cost (Cloud AWS/GCP, licenses, office, marketing)
  // At 120 clients, non-personnel is approximately Rp9.5 Miliar
  const nonPersonnelCostBillion = 9.5;
  const totalCostBillion = salaryCostBillion + nonPersonnelCostBillion;
  const netProfitBillion = targetRevenue - totalCostBillion;
  const netMarginPercent = (netProfitBillion / targetRevenue) * 100;

  let isViable = false;
  let notes = '';

  if (ratio >= 1.80) {
    isViable = false;
    notes = 'ZONA MERAH: Biaya SDM (Rp42,8M) melahap hampir 95% total omset. Perusahaan merugi ~Rp7,3 Miliar (-10,5% margin). Target Rp45M mustahil dicapai!';
  } else if (ratio >= 1.45) {
    isViable = false;
    notes = 'ZONA WASPADA: Perusahaan menanggung biaya transformasi tanpa menikmati hasilnya. Laba hanya Rp1,65 M (margin 3,7%), jauh di bawah target 15-20%.';
  } else {
    isViable = true;
    notes = 'ZONA TARGET TEROPTIMASI: Hubungan linear terpangkas. Rasio 1,15 menghasilkan 138 staf, membalikkan laba menjadi Rp7,86 Miliar dengan margin 17,5% (naik 20x lipat)!';
  }

  return {
    ratio,
    employees,
    salaryCost: Number(salaryCostBillion.toFixed(2)),
    totalCost: Number(totalCostBillion.toFixed(2)),
    netProfit: Number(netProfitBillion.toFixed(2)),
    netMargin: Number(netMarginPercent.toFixed(1)),
    isViable,
    notes
  };
}

export function formatCurrencyIDR(valMillion: number, unit: 'jt' | 'M' = 'jt'): string {
  if (unit === 'M') {
    return `Rp ${(valMillion / 1000).toFixed(1)} Miliar`;
  }
  return `Rp ${valMillion.toLocaleString('id-ID')} Juta`;
}
