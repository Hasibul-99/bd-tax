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
