$(document).ready(function($) {

    if (labelPage === 0) {
        $('#HomePageTitle').html(HomePage.Title);
        $('#HomePageTitle1').html(HomePage.Title1);
        $('#HomePageSubtitle').html(HomePage.Subtitle);
        $('#HomePageContent').html(HomePage.Content);
        $('#HomePageStartButton').html(HomePage.StartButton);
        $('#HomePageHeader1').html(HomePage.Header1);
        $('#HomePageContent1').html(HomePage.Content1);
        $('#HomePageHeader2').html(HomePage.Header2);
        $('#HomePageContent2').html(HomePage.Content2);
        $('#HomePageHeader3').html(HomePage.Header3);
        $('#HomePageContent3').html(HomePage.Content3);

        $('#HomePageCompanyName').html(HomePage.CompanyName);
        $('#HomePageAddress1').html(HomePage.Address1);
        $('#HomePageAddress2').html(HomePage.Address2);
        $('#HomePageAddress3').html(HomePage.Address3);

        $('#HomePageDisclaimer').html(HomePage.Disclaimer);
        $('#HomePagePrivacyStatement').html(HomePage.PrivacyStatement);

        $('#HomePageContactUs').html(HomePage.ContactUs);
        $('#HomePageAbout').html(HomePage.About);

        //$('#LandingBackground').html(HomePage.About);
    }
    if (labelPage === 1) {
//VEICULO - Tipo\\Prazo\\KMs\\Financiamento
        $('#HomePageTitle').html(HomePage.Title);
        $('#HomePageTitle1').html(HomePage.Title1);
        $('#ComparisonPageSelectVehicle').html(ComparisonPage.SelectVehicle);
        $('#ComparisonPageTypeofCar').html(ComparisonPage.TypeofCar);
        $('#ComparisonPageFinanceMethod').html(ComparisonPage.FinanceMethod);
        $('#ComparisonPageLeaseYears').html(ComparisonPage.LeaseYears);
        $('#ComparisonPageAnnualMileage').html(ComparisonPage.AnnualMileage);

        $('#ComparisonPageBankLoan').html(ComparisonPage.BankLoan);
        $('#ComparisonPageFinanceLease').html(ComparisonPage.FinanceLease);
        $('#ComparisonPageOwnFunds').html(ComparisonPage.OwnFunds);

        $('#ComparisonPageMake').html(ComparisonPage.Make);
        $('#ComparisonPageModel').html(ComparisonPage.Model);
        $('#ComparisonPageType').html(ComparisonPage.Type);
        $('#ComparisonPageFueltype').html(ComparisonPage.Fueltype);
        $('#ComparisonPageListPrice').html(ComparisonPage.ListPrice);

        $('#ComparisonPageTailoredReport').html(ComparisonPage.TailoredReport);
        $('#ComparisonPageCallUs').html(ComparisonPage.CallUs);
        $('#ComparisonPageContactUs').html(ContactPage.Title);
        $('#ComparisonPageInfoPricesPictures').html(ComparisonPage.InfoPricesPictures);

        $('#ComparisonPageFinanceMethodCaps').html(ComparisonPage.FinanceMethod2);
        $('#ComparisonPageTotalMonthlyCosts').html(ComparisonPage.TotalMonthlyCosts);
        $('#ComparisonPageTotalSavings').html(ComparisonPage.TotalSavings);
        $('#ComparisonPageAllpricesVATexcl').html(ComparisonPage.AllpricesVATexcl);
        $('#ComparisonPagePrintButton').html(ComparisonPage.Print);

        $('#ComparisonPageDetailsCostbreakdown').html(ComparisonPage.DetailsCostbreakdown);

        $('.ComparisonPageYourMonthlyCost').html(ComparisonPage.YourMonthlyCost);
        $('.ComparisonPageOurLeaseprice').html(ComparisonPage.OurLeaseprice);
        $('.ComparisonPageHowCalculated').html(ComparisonPage.HowCalculated);
        $('.ComparisonPageHowSavings').html(ComparisonPage.HowSavings);
        $('.ComparisonPageVatExcluded').html(ComparisonPage.VatExcluded);

        $('.ComparisonPageOpen').html(ComparisonPage.Open);
        $('.ComparisonPageClose').html(ComparisonPage.Close);

        $('#ContactPageTitle').html(ContactPage.Title);
        $('#ContactPageName').html(ContactPage.Name);
        $('#ContactPageEmail').html(ContactPage.Email);
        $('#ContactPageMr').html(ContactPage.Mr);
        $('#ContactPageMrs').html(ContactPage.Mrs);
        $('#ContactPagePhonenumber').html(ContactPage.Phonenumber);
        $('#ContactPageNumberVehicles').html(ContactPage.NumberVehicles);
        $('#ContactPageTailoredReport').html(ContactPage.TailoredReport);
        $('#ContactPageYesOption').html(ContactPage.YesOption);
        $('#ContactPageNoOption').html(ContactPage.NoOption);

        $('#ContactPageExtraField1').html(ContactPage.ExtraField1);
        $('#ContactPageExtraField2').html(ContactPage.ExtraField2);
        $('#ContactPageExtraField3').html(ContactPage.ExtraField3);
        $('#ContactPageExtraField4').html(ContactPage.ExtraField4);
        $('#ContactPageExtraField5').html(ContactPage.ExtraField5);
        $('#ContactPageExtraField6').html(ContactPage.ExtraField6);
        $('#ContactPageExtraField7').html(ContactPage.ExtraField7);
        $('#ContactPageExtraField8').html(ContactPage.ExtraField8);

        $('#ContactPageCloseButton').html(ContactPage.Close);
        $('#ContactPageSend').html(ContactPage.Send);

        $('#CarFinanceTitle').html(CarFinance.Title);
        $('#CarFinanceMontlyCostInfo').html(CarFinance.MontlyCostInfo);
        $('#CarFinanceOurSavingsInfo').html(CarFinance.OurSavingsInfo);

        $('#RunningCostsTitle').html(RunningCosts.Title);
        $('#RunningCostsMontlyCostInfo').html(RunningCosts.MontlyCostInfo);
        $('#RunningCostsOurSavingsInfo').html(RunningCosts.OurSavingsInfo);

        $('#DowntimeCostsTitle').html(DowntimeCosts.Title);
        $('#DowntimeCostsMontlyCostInfo').html(DowntimeCosts.MontlyCostInfo);
        $('#DowntimeCostsOurSavingsInfo').html(DowntimeCosts.OurSavingsInfo);

        $('#ManagementCostsTitle').html(ManagementCosts.Title);
        $('#ManagementCostsMontlyCostInfo').html(ManagementCosts.MontlyCostInfo);
        $('#ManagementCostsOurSavingsInfo').html(ManagementCosts.OurSavingsInfo);

        $('#UsedCarSaleIncomeTitle').html(UsedCarSaleIncome.Title);
        $('#UsedCarSaleIncomeMontlyCostInfo').html(UsedCarSaleIncome.MontlyCostInfo);
        $('#UsedCarSaleIncomeOurSavingsInfo').html(UsedCarSaleIncome.OurSavingsInfo);

        $('#ComparisonPageHowCalculated').html(ComparisonPage.YourMonthlyIncome);

        
    }
});

