// Auth
export const LOGIN = 'sanctum/token'
export const REGISTRATION = 'register'
export const FORGET_PASSWORD = 'forgot-password'
export const SUBMIT_PASSWORD = 'submit-password'
export const HEAR_ABOUT_US = 'hear-about-us'

// Store User Package Selection
export const GUEST_PACKAGE_LIST = 'guest-package-list'
export const PACKAGE_LIST = 'packages-list'
export const TEMP_PACKAGES = 'tempPackages'

// Get user step
export const GET_USER_STEP = 'get-user-step'

// Get Profile
export const GET_USER_PROFILE = 'get-user-profile'
export const PACKAGE_WISE_PROFILE = 'packagewiseProfile'

// Get user file and uploaded users uploaded file list
export const GET_FILES = 'get-files'
export const UPLOAD_FILES = 'upload-file'
export const DELETE_FILE = 'delete-file/'

// Process Salary Doc
export const PROCESS_SALARY_DOC = 'process-salary-doc'
export const GET_PAYMENT_METHOD = 'get-payment-method'

// Home Page
export const GET_ORDER_HISTORY = 'get-order-history'

// Get Order Status
export const GET_ORDER_STATUS = 'get-order-status'
export const GET_PAYMENT_STATUS = 'get-payment-status'
export const GET_VALIDATE_BKASH = 'validate-bkash'

// User Docs
export const GET_ALL_TAX_YEAR = 'getAllTaxYear'
export const GET_USER_FILE_BY_TAX_YEAR = 'get-user-file-by-tax-year'

export const GET_DOWNLOAD_TAX_FILE = 'download-tax-file'
export const SAVE_CONSENT_DOC = 'save-consent'
export const SAVE_USER_SIGNATURE = 'save-user-signature'

// submit-contact
export const SUBMIT_CONTACT = 'submit-contact'

export const GET_AREAS = 'get-areas'
export const GET_DIVISIONS = 'get-divisions'

export const GET_incomeAssetLiabilySourceList = 'incomeAssetLiabilySourceList'

// Tax Plan amount
export const GET_ANNUAL_INCOME = 'annualIncome'
export const GET_INSURANCE = 'getInsurance'

// Standard Form

export const SAVE_INCOME_SALARIES = 'saveIncomeSalaries'
export const GET_SALARIES = 'getSalaries'

export const GET_Financial_Assets_Type = 'getFinancialAssetsType'
export const Save_Financial_Assets = 'saveFinancialAssets'
export const Get_Financial_Assets = 'getFinancialAssets'
export const Delete_Financial_Assets = 'deleteFinancialAssets'

export const Get_Tds_Type = 'getTdsType'
export const Save_Tds = 'saveTds'
export const Get_Tds = 'getTds'
export const Delete_Tds = 'deleteTds'

export const Get_capital_Gain_Type = 'capitalGainType'
export const Save_Capital_Gain = 'saveCapitalGain'
export const get_Capital_Gain = 'getCapitalGain'
export const delete_Capital_Gain = 'deleteCapitalGain'

export const Save_Foreign_Income = 'saveForeignIncome'
export const Get_Foreign_Income = 'getForeignIncome'
export const Delete_Foreign_Income = 'deleteForeignIncome'
// export const Save_Foreign_Income = 'saveForeignIncome'

export const Get_Other_Sources = 'get-other-sources'
export const Save_Other_Sources = 'save-other-sources'

export const Save_Adjustmentsof_TaxRefund = 'saveAdjustmentsofTaxRefund'
export const Delete_Adjustment_TaxRefund = 'deleteAdjustmentTaxRefund'
export const Get_Adjustmentsof_TaxRefund = 'getAdjustmentsofTaxRefund'

export const Save_Advance_Paid_Tax = 'saveAdvancePaidTax'
export const Get_Advance_Paid_Tax = 'getAdvancePaidTax'
export const Delete_Advance_Paid_Tax = 'deleteAdvancePaidTax'

export const Create_Rental_Properties =
  'income/userIncomeHouseProperties/create'
export const Get_Rental_Properties = 'income/userIncomeHouseProperties'
export const Update_Rental_Properties =
  'income/userIncomeHouseProperties/update/'
export const Delete_Rental_Properties =
  'income/userIncomeHouseProperties/delete/'

export const Get_Income_BsuinessOrProfession_Types =
  'income/userIncomeBsuinessOrProfessionType'
export const Get_Income_BsuinessOrProfession =
  'income/userIncomeBsuinessOrProfessions'
export const Save_Income_BsuinessOrProfession =
  'income/userIncomeBsuinessOrProfessions/createOrUpdate'
export const Delete_Income_BsuinessOrProfession =
  'income/userIncomeBsuinessOrProfessions/delete/'

export const Get_User_Income_TaxRebate = 'income/userIncomeTaxRebate'
export const Save_User_Income_TaxRebate = 'income/userIncomeTaxRebate/create'
export const Update_User_Income_TaxRebate = 'income/userIncomeTaxRebate/update/'
export const Delete_User_Income_TaxRebate = 'income/userIncomeTaxRebate/delete/'

export const Get_User_Income_SpouseChilds_Type =
  'income/userIncomeSpouseChildType'
export const Get_User_Income_SpouseChilds = 'income/userIncomeSpouseChilds'
export const Create_User_Income_SpouseChilds =
  'income/userIncomeSpouseChilds/create'
export const Update_User_Income_SpouseChilds =
  'income/userIncomeSpouseChilds/update/'
export const Delete_User_Income_SpouseChilds =
  'income/userIncomeSpouseChilds/delete/'

export const Get_ShareOfProfitInFirms = 'income/userIncomeShareOfProfitInFirms'
export const Create_ShareOfProfitInFirms =
  'income/userIncomeShareOfProfitInFirms/create'
export const Update_ShareOfProfitInFirms =
  'income/userIncomeShareOfProfitInFirms/update/'
export const Delete_ShareOfProfitInFirms =
  'income/userIncomeShareOfProfitInFirms/delete/'

export const Get_User_Income_AgricultureCrops_Type =
  'income/userIncomeAgricultureCropsType'
export const Get_User_Income_AgricultureCrops = 'income/userIncomeAgricultures'
export const Create_User_Income_AgricultureCrops =
  'income/userIncomeAgricultures/create'
export const Update_User_Income_AgricultureCrops =
  'income/userIncomeAgricultures/update/'
export const Delete_User_Income_AgricultureCrops =
  'income/userIncomeAgricultures/delete/'

//User Asset
export const Get_User_Asset = 'asset/userAsset'

export const Get_User_Business_Capitals = 'asset/userBusinessCapitals'
export const Create_User_Business_Capitals = 'asset/userBusinessCapitals/create'
export const Update_User_Business_Capitals =
  'asset/userBusinessCapitals/update/'
export const Delete_User_Business_Capitals =
  'asset/userBusinessCapitals/delete/'

export const Get_User_Shareholding_Companies = 'asset/userShareholdingCompanies'
export const Create_User_Shareholding_Companies =
  'asset/userShareholdingCompanies/create'
export const Update_User_Shareholding_Companies =
  'asset/userShareholdingCompanies/update/'
export const Delete_User_Shareholding_Companies =
  'asset/userShareholdingCompanies/delete/'

export const Get_User_NonAgricultureProperty_Type =
  'asset/userNonAgriculturePropertyType'
export const Get_User_NonAgricultureProperty =
  'asset/userNonAgricultureProperties'
export const Create_User_NonAgricultureProperty =
  'asset/userNonAgricultureProperties/create'
export const Update_User_NonAgricultureProperty =
  'asset/userNonAgricultureProperties/update/'
export const Delete_User_NonAgricultureProperty =
  'asset/userNonAgricultureProperties/delete/'

export const Get_User_Agriculture_Properties = 'asset/userAgricultureProperties'
export const Create_User_Agriculture_Properties =
  'asset/userAgricultureProperties/create'
export const Update_User_Agriculture_Properties =
  'asset/userAgricultureProperties/update/'
export const Delete_User_Agriculture_Properties =
  'asset/userAgricultureProperties/delete/'

export const Get_User_Investment_Type = 'asset/userInvestmentType'
export const Get_User_Investment = 'asset/userInvestments'
export const Create_User_Investment = 'asset/userInvestments/create'
export const Update_User_Investment = 'asset/userInvestments/update/'
export const Delete_User_Investment = 'asset/userInvestments/delete/'

export const Get_User_MotorVehicles = 'asset/userMotorVehicles'
export const Create_User_MotorVehicles = 'asset/userMotorVehicles/create'
export const Update_User_MotorVehicles = 'asset/userMotorVehicles/update/'
export const Delete_User_MotorVehicles = 'asset/userMotorVehicles/delete/'

export const Get_User_Furnitures = 'asset/userFurnitures'
export const Create_User_Furnitures = 'asset/userFurnitures/create'
export const Update_User_Furnitures = 'asset/userFurnitures/update/'
export const Delete_User_Furnitures = 'asset/userFurnitures/delete/'

export const Get_User_Jewelries = 'asset/userJewelries'
export const Create_User_Jewelries = 'asset/userJewelries/create'
export const Update_User_Jewelries = 'asset/userJewelries/update/'
export const Delete_User_Jewelries = 'asset/userJewelries/delete/'
