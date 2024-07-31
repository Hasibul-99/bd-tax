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
