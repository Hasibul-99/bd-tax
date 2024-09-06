export const DeemedFreeAccommodationCal = (allValues) => {
  if (!allValues.PaidAnyPartOfRent || allValues.PaidAnyPartOfRent === 'N') {
    return allValues.RentalValueOfHouse_1
  } else if (allValues.PaidAnyPartOfRent === 'Y') {
    if (allValues.RentalValueOfHouse_1 - allValues.PaidPartOfRentValue_1 < 0) {
      return 0
    } else {
      return (
        (allValues.RentalValueOfHouse_1 || 0) -
        (allValues.PaidPartOfRentValue_1 || 0)
      )
    }
  } else return 0
}

export const addNonNegative = (sum) => {
  if (sum < 0) {
    return 0
  }
  return sum
}

export const getEmployeeShareSchemes = (allValues) => {
  let total =
      (allValues.EmployeeShareSchemes_1 || 0) -
      (allValues.EmployeeShareSchemes_2 || 0),
    halfOf1 = allValues.EmployeeShareSchemes_1
      ? (allValues.EmployeeShareSchemes_1 || 0) / 2
      : 0

  console.log(
    allValues.EmployeeShareSchemes_1,
    allValues.EmployeeShareSchemes_2,
    total
  )

  return (allValues.EmployeeShareSchemes_2 || 0) >= halfOf1
    ? addNonNegative(halfOf1)
    : addNonNegative(total)
}

export const getTotalGrossTaxableIncome1 = (allValues) => {
  return (
    (allValues.BasicPay_1 || 0) +
    (allValues.SpecialPay_1 || 0) +
    (allValues.DearnessAllowance_1 || 0) +
    (allValues.ConveyanceAllowance_1 || 0) +
    (allValues.HouseRentAllowance_1 || 0) +
    (allValues.MedicalAllowance_1 || 0) +
    (allValues.MedicalAllowanceForDisability_1 || 0) +
    (allValues.ServantAllowance_1 || 0) +
    (allValues.LeaveAllowance_1 || 0) +
    (allValues.LeaveEncashment_1 || 0) +
    (allValues.HonorariumOrReward_1 || 0) +
    (allValues.Others_1 || 0) +
    (allValues.OvertimeAllowance_1 || 0) +
    (allValues.Bonus_1 || 0) +
    (allValues.OtherAllowances_1 || 0) +
    (allValues.EmployersContributionProvidentFund_1 || 0) +
    (allValues.Arear_1 || 0) +
    (allValues.RecognizedProvidentFundIncome_1 || 0) +
    (allValues.WorkersProfitParticipationFund_1 || 0) +
    (allValues.Surgery_HEKLC_1 || 0) +
    (allValues.InterestAccruedProvidentFund_1 || 0) +
    (allValues.DeemedIncomeTransport || 0) +
    (DeemedFreeAccommodationCal(allValues) || 0) +
    (allValues.Gratuity_1 || 0) +
    (allValues.EmployeeShareSchemes_1 || 0)
  )
}

export const getTotalGrossTaxableIncome2 = (allValues) => {
  if (getTotalGrossTaxableIncome1(allValues)) {
    let total = Math.round(getTotalGrossTaxableIncome1(allValues) / 3)
    if (total && total >= 450000) return 450000
    else return total || 0
  } else return 0
}

export const getDataOtherSourse = (data) => {
  if (data) {
    return {
      InterestFromMutualFund: data.InterestFromMutualFund || 0,
      InterestFromMutualFund_1: data.InterestFromMutualFund_1 || 0,
      CashDividend: data.CashDividend || 0,
      CashDividend_1: data.CashDividend_1 || 0,
      InterestIncomeFromWEDB: data.InterestIncomeFromWEDB || 0,
      InterestIncomeFromWEDB_1: data.InterestIncomeFromWEDB_1 || 0,
      USDollarPremium: data.USDollarPremium || 0,
      USDollarPremium_1: data.USDollarPremium_1 || 0,
      PoundSterlingPremium: data.PoundSterlingPremium || 0,
      PoundSterlingPremium_1: data.PoundSterlingPremium_1 || 0,
      EuroPremium: data.EuroPremium || 0,
      EuroPremium_1: data.EuroPremium_1 || 0,
      InvestmentInInstrument: data.InvestmentInInstrument || 0,
      InvestmentInInstrument_1: data.InvestmentInInstrument_1 || 0,
      InterestFromInstrument: data.InterestFromInstrument || 0,
      InterestFromInstrument_1: data.InterestFromInstrument_1 || 0,
      TDSFromSanchaypatra: data.TDSFromSanchaypatra || 0,
      SanchaypatraIncome: data.SanchaypatraIncome || 0,
      SanchaypatraIncome_1: data.SanchaypatraIncome_1 || 0,
      Others: data.Others || 0,
      Others_1: data.Others_1 || 0,
      TotalAmountIncome: data.TotalAmountIncome || 0,
    }
  } else return null

  // {
  //   "IncomeOtherSourceId": 2709,
  //   "IncomeId": 41952,
  //   "Type": null,
  //   "Description": null,

  //   "CerateAt": "2024-08-20 09:29:52",
  //   "LastUpdateAt": "2024-08-20 15:29:52",
  //   "CPIId": 51326,
  //   "EntryYear": "2024-2025",
  //   "trash": 0
  // }
}

export const govNetSalaryIncome = (allValues) => {
  let res =
    (allValues.BasicPay_1 || 0) +
    (allValues.SpecialPay_1 || 0) +
    (allValues.DearnessAllowance_1 || 0) +
    (allValues.ConveyanceAllowance_1 || 0) +
    (allValues.HouseRentAllowance_1 || 0) +
    (allValues.MedicalAllowance_1 || 0) +
    (allValues.ServantAllowance_1 || 0) +
    (allValues.LeaveAllowance_1 || 0) +
    (allValues.LeaveEncashment_1 || 0) +
    (allValues.HonorariumOrReward_1 || 0) +
    (allValues.OvertimeAllowance_1 || 0) +
    (allValues.Bonus_1 || 0) +
    (allValues.OtherAllowances_1 || 0) +
    (allValues.EmployersContributionProvidentFund_1 || 0) +
    (allValues.InterestAccruedProvidentFund_1 || 0) +
    (allValues.DeemedIncomeTransport_1 || 0) +
    (allValues.DeemedFreeAccommodation_1 || 0) +
    (allValues.FestivalBonus_1 || 0) +
    (allValues.BengaliNewYearBonus_1 || 0) +
    (allValues.EntertainmentAllowance_1 || 0) +
    (allValues.Pension_1 || 0) +
    (allValues.RecognizedProvidentFundIncome_1 || 0) +
    (allValues.Others_1 || 0) +
    (allValues.Arear_1 || 0)

  return res || 0
}

export const govNetTaxWaiver = (allValues) => {
  let res =
    (allValues.SpecialPay_1 || 0) +
    (allValues.DearnessAllowance_1 || 0) +
    (allValues.ConveyanceAllowance_1 || 0) +
    (allValues.HouseRentAllowance_1 || 0) +
    (allValues.MedicalAllowance_1 || 0) +
    (allValues.ServantAllowance_1 || 0) +
    (allValues.LeaveAllowance_1 || 0) +
    (allValues.LeaveEncashment_1 || 0) +
    (allValues.OvertimeAllowance_1 || 0) +
    (allValues.OtherAllowances_1 || 0) +
    (allValues.EmployersContributionProvidentFund_1 || 0) +
    (allValues.InterestAccruedProvidentFund_1 || 0) +
    (allValues.DeemedIncomeTransport_1 || 0) +
    (allValues.DeemedFreeAccommodation_1 || 0) +
    (allValues.BengaliNewYearBonus_1 || 0) +
    (allValues.Pension_1 || 0) +
    (allValues.RecognizedProvidentFundIncome_1 || 0) +
    (allValues.Others_1 || 0)

  return res || 0
}

export const govNetTaxableIncome = (allValues) => {
  let res =
    (allValues.BasicPay_1 || 0) +
    (allValues.HonorariumOrReward_1 || 0) +
    (allValues.Bonus_1 || 0) +
    (allValues.FestivalBonus_1 || 0) +
    (allValues.EntertainmentAllowance_1 || 0) +
    (allValues.Arear_1 || 0)

  return res || 0
}

export const lifeInsurancePremiumCal = (allValues) => {
  if (allValues) {
    let amount = Math.round((allValues.PolicyValue || 0) * 0.1)

    return allValues?.LifeInsurancePremium_1 > amount
      ? amount
      : allValues?.LifeInsurancePremium_1
  }
}

export const taxRebateSavingsCertificates = (allValues) => {
  // allValues.SavingsCertificates_1 || 0
  if (allValues && allValues.SavingsCertificates_1) {
    let BangladeshGovtTreasuryBond = allValues.BangladeshGovtTreasuryBond || 0,
      SavingsCertificates_1 = allValues.SavingsCertificates_1 || 0

    if (BangladeshGovtTreasuryBond) {
      let amount = 500000 - BangladeshGovtTreasuryBond
      if (amount === 0) {
        return 0
      } else if (SavingsCertificates_1 >= amount) {
        return amount
      } else return SavingsCertificates_1
    } else if (SavingsCertificates_1 >= 500000) {
      return 500000
    } else return SavingsCertificates_1
  }
}

export const taxRebateBangladeshGovtTreasuryBond = (allValues) => {
  // allValues.BangladeshGovtTreasuryBond_1 || 0
  if (allValues?.BangladeshGovtTreasuryBond_1) {
    let SavingsCertificates = allValues.SavingsCertificates || 0,
      BangladeshGovtTreasuryBond_1 = allValues.BangladeshGovtTreasuryBond_1 || 0

    if (SavingsCertificates) {
      let amount = 500000 - SavingsCertificates

      if (amount === 0) {
        return 0
      } else if (BangladeshGovtTreasuryBond_1 >= amount) {
        return amount
      } else return BangladeshGovtTreasuryBond_1
    } else if (BangladeshGovtTreasuryBond_1 >= 500000) {
      return 500000
    } else return BangladeshGovtTreasuryBond_1
  }
}
