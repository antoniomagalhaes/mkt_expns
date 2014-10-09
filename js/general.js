
var usedCurrencySymbol;

$(document).ready(function($) {

	if (labelPage === 0) {
		$('#HomePageContactUs').click(function() {
			window.location = ContactPage.ExtraField2;
		});
		$('#HomePageAbout').click(function() {
			window.location = HomePage.URLAbout;
		});
		$('#HomePageDisclaimer').click(function() {
			window.location = HomePage.URLDisclaimer;
		});
		$('#HomePagePrivacyStatement').click(function() {
			window.location = HomePage.URLPrivacyStatement;
		});
		$('#btnStartComparison').click(function() {
			window.location ='tool.html';
		});
	}
	else {
		switch (ComparisonPage.Currency) {
			case 'SEK': usedCurrencySymbol = 'kr'; break;
			case 'GBP': usedCurrencySymbol = '&pound;'; break;
			case 'EUR': usedCurrencySymbol = '&euro;'; break;
			case 'USD': usedCurrencySymbol = '$'; break;
			case 'JPY': usedCurrencySymbol = '&yen;'; break;
			case 'PLN': usedCurrencySymbol = 'zl'; break;
			
			default: usedCurrencySymbol = ComparisonPage.Currency; break;
		}
		$('.currency-symbol').html(usedCurrencySymbol);
		
		$('#ComparisonPageContactUs').click(function() {
			window.location = ContactPage.ExtraField2;
		});
		
		
		$('#drpYears').attr('disabled', true);
		$('#drpMileage').attr('disabled', true);
		$('#lblFM_Selected').text($("#drpFinancing option:selected").text());

		$('#ManagementCostsMontlyCostInfoHours').html('');
		$('#DowntimeCostsMontlyCostInfoDays').html('');
		
		$('#CarFinanceMontlyCostInfo').html($('#CarFinanceMontlyCostInfo').html().replace('[VehicleCatPrice]', ''));
		$('#CarFinanceMontlyCostInfo').html($('#CarFinanceMontlyCostInfo').html().replace('[AvgMarketVehicleDiscount]', ''));
		$('#CarFinanceMontlyCostInfo').html($('#CarFinanceMontlyCostInfo').html().replace('[AvgMarketInterestRate]', ''));
		$('#CarFinanceMontlyCostInfo').html($('#CarFinanceMontlyCostInfo').html().replace('[PreFinanceCost]', ''));


		for (var i = 0; i < IQFautos.length; i++) {
			$('#drpType').append($("<option></option>").attr("value", i).text(IQFautos[i].Make.replace(/ +(?= )/g, '') + ' ' + IQFautos[i].Model.replace(/ +(?= )/g, '') + ' ' + IQFautos[i].Type.replace(/ +(?= )/g, '')));
		}

		$('#drpType').change(function() {
			loadCarInfo();
			loadTerms();
			$('#drpYears').attr('disabled', false);
			$('#drpMileage').attr('disabled', true);
		});

		$('#drpYears').change(function() {
			loadMileage();
			$('#drpMileage').attr('disabled', false);
		});

		$('#drpMileage').change(function() {
			loadAmounts();
		});

		$('#drpFinancing').change(function() {
			$('#lblFM_Selected').text($("#drpFinancing option:selected").text());
			loadAmounts();
		});

	/*
		
		$('#btnContactUs').click(function() {
			$('#contactUs').show();
		});
		$('#btnContactUsClose').click(function() {
			$('.contactUs').hide();
		});

		if (ContactPage.ExtraField1 === null || ContactPage.ExtraField1 === '0') {
			$('.optional1').hide();
		}
		if (ContactPage.ExtraField2 === null || ContactPage.ExtraField2 === '0') {
			$('.optional2').hide();
		}
		if (ContactPage.ExtraField3 === null || ContactPage.ExtraField3 === '0') {
			$('.optional3').hide();
		}
		if (ContactPage.ExtraField4 === null || ContactPage.ExtraField4 === '0') {
			$('.optional4').hide();
		}
		if (ContactPage.ExtraField5 === null || ContactPage.ExtraField5 === '0') {
			$('.optional5').hide();
		}
		if (ContactPage.ExtraField6 === null || ContactPage.ExtraField6 === '0') {
			$('.optional6').hide();
		}
		if (ContactPage.ExtraField7 === null || ContactPage.ExtraField7 === '0') {
			$('.optional7').hide();
		}
		
		$('#btnContactUsClose').click(function() {
			$('#contactUs').hide();
		});
	*/

		/* Hide sections */
		if (CarFinance.Showsection === 'No') {
			$('#sectionCarFinance').hide();
		}
		if (RunningCosts.Showsection === 'No') {
			$('#sectionRunningCosts').hide();
		}
		if (DowntimeCosts.Showsection === 'No') {
			$('#sectionDowntimeCosts').hide();
		}
		if (ManagementCosts.Showsection === 'No') {
			$('#sectionManagementCosts').hide();
		}
		if (UsedCarSaleIncome.Showsection === 'No') {
			$('#sectionUsedCarSaleIncome').hide();
		}
	}
});

function loadCarInfo() {
    var selectedCar = $("#drpType option:selected").val();

    $('#selectedBrand').text(IQFautos[selectedCar].Make);
    $('#selectedModel').text(IQFautos[selectedCar].Model);
    $('#selectedEngine').text(IQFautos[selectedCar].Type);
    $('#selectedFuelType').text(IQFautos[selectedCar].Fueltype);
    $('#selectedListPrice').html(IQFautos[selectedCar].CataloguePrice);
		
	$('#drpYears').val(-1);
	$('#drpMileage').val(-1);
	
	$('#imgSelectedCar').css('background-image', 'url(\'uploads/images/' + IQFautos[selectedCar].Image + '\')');
	
  //$('#imgSelectedCar').css("background-image", "url('uploads/images/" + IQFautos[selectedCar].Image + "')");
    //$('#imgSelectedCar').attr("src", 'uploads/images/' + IQFautos[selectedCar].Image);
}

function loadTerms() {
    var selectedCar = $("#drpType option:selected").val();

    //$("#drpType option[value='-1']").remove();

    $('#drpYears').empty();
    $('#drpYears').append($("<option></option>").attr("value", -1).text('...'));
    for (var i = 0; i < IQFautos[selectedCar].Terms.length; i++) {
        $('#drpYears').append($("<option></option>").attr("value", i).text((IQFautos[selectedCar].Terms[i].Term / 12)));
    }
}

function loadMileage() {
    var selectedCar = $("#drpType option:selected").val();
    var selectedTerm = $("#drpYears option:selected").val();

    $('#drpMileage').empty();
    $('#drpMileage').append($("<option></option>").attr("value", -1).text('...'));
    for (var i = 0; i < IQFautos[selectedCar].Terms[selectedTerm].Mileages.length; i++) {
        $('#drpMileage').append($("<option></option>").attr("value", i).text(IQFautos[selectedCar].Terms[selectedTerm].Mileages[i].MileagePerYear));
    }
}

function loadAmounts() {
    var selectedCar = $("#drpType option:selected").val();
    var selectedTerm = $("#drpYears option:selected").val();
    var selectedMileage = $("#drpMileage option:selected").val();
	var selectedFinancing = $("#drpFinancing option:selected").val();
	
	if (selectedFinancing == 0 || selectedFinancing == 1) {
		$('#YourMonthlyCostCF').text(IQFautos[selectedCar].Terms[selectedTerm].Mileages[selectedMileage].YourMonthlyCostCF);
	}
	else {
		$('#YourMonthlyCostCF').text(IQFautos[selectedCar].Terms[selectedTerm].Mileages[selectedMileage].YourMonthlyCostCFO);
	}
	
    if (selectedCar != -1 && selectedTerm != -1 && selectedMileage != -1)
	{

		$('#OurLeasePriceCF').text(IQFautos[selectedCar].Terms[selectedTerm].Mileages[selectedMileage].OurLeasePriceCF);
		$('#YourMonthlyCostRC').text(IQFautos[selectedCar].Terms[selectedTerm].Mileages[selectedMileage].YourMonthlyCostRC);
		$('#OurLeasePriceRC').text(IQFautos[selectedCar].Terms[selectedTerm].Mileages[selectedMileage].OurLeasePriceRC);
		$('#YourMonthlyCostVD').text(IQFautos[selectedCar].Terms[selectedTerm].Mileages[selectedMileage].YourMonthlyCostVD);
		$('#OurLeasePriceVD').text(IQFautos[selectedCar].Terms[selectedTerm].Mileages[selectedMileage].OurLeasePriceVD);
		$('#YourMonthlyCostMC').text(IQFautos[selectedCar].Terms[selectedTerm].Mileages[selectedMileage].YourMonthlyCostMC);
		$('#OurLeasePriceMC').text(IQFautos[selectedCar].Terms[selectedTerm].Mileages[selectedMileage].OurLeasePriceMC);
		$('#YourMonthlyCostUC').text(IQFautos[selectedCar].Terms[selectedTerm].Mileages[selectedMileage].YourMonthlyCostUC);
		$('#OurLeasePriceUC').text(IQFautos[selectedCar].Terms[selectedTerm].Mileages[selectedMileage].OurLeasePriceUC);
	}

    if (CarFinance.Showsection === 'No') {
        $('#sectionCarFinance').hide();
    }
    if (RunningCosts.Showsection === 'No') {
        $('#sectionRunningCosts').hide();
    }
    if (DowntimeCosts.Showsection === 'No') {
        $('#sectionDowntimeCosts').hide();
    }
    if (ManagementCosts.Showsection === 'No') {
        $('#sectionManagementCosts').hide();
    }
    if (UsedCarSaleIncome.Showsection === 'No') {
        $('#sectionUsedCarSaleIncome').hide();
    }

    $('#ManagementCostsMontlyCostInfoHours').html(IQFautos[selectedCar].Terms[selectedTerm].Mileages[selectedMileage].TotManCostHours + ' ' + ComparisonPage.Hours);
    $('#DowntimeCostsMontlyCostInfoDays').html(IQFautos[selectedCar].Terms[selectedTerm].Mileages[selectedMileage].TotDowntimeDays + ' ' + ComparisonPage.Days);

	if(selectedFinancing == 0 || selectedFinancing == 1) {
		 $('#TotalMonthlyCosts').text(IQFautos[selectedCar].Terms[selectedTerm].Mileages[selectedMileage].TotalMonthCosts);
		$('#TotalSavings').text(IQFautos[selectedCar].Terms[selectedTerm].Mileages[selectedMileage].TotalOurSavings);
	}
	else {
		 $('#TotalMonthlyCosts').text(IQFautos[selectedCar].Terms[selectedTerm].Mileages[selectedMileage].TotalMonthCostsO);
		$('#TotalSavings').text(IQFautos[selectedCar].Terms[selectedTerm].Mileages[selectedMileage].TotalOurSavingsO);
	}
    $('#TotalOurLeasePrice').text(IQFautos[selectedCar].Terms[selectedTerm].Mileages[selectedMileage].TotalLeasePrice);

	
    $('#CarFinanceMontlyCostInfo').html(CarFinance.MontlyCostInfo);
    $('#CarFinanceMontlyCostInfo').html($('#CarFinanceMontlyCostInfo').html().replace('[VehicleCatPrice]', '<span style="color: #f5821e">' + IQFautos[selectedCar].Terms[selectedTerm].Mileages[selectedMileage].VehicleCatPrice + '</span>'));
    $('#CarFinanceMontlyCostInfo').html($('#CarFinanceMontlyCostInfo').html().replace('[AvgMarketVehicleDiscount]', '<span style="color: #f5821e">' + IQFautos[selectedCar].Terms[selectedTerm].Mileages[selectedMileage].AvgMarketVehicleDiscount + '</span>'));
	
	if(IQFautos[selectedCar].Terms[selectedTerm].Mileages[selectedMileage].PreFinanceCost == '0,00%' || IQFautos[selectedCar].Terms[selectedTerm].Mileages[selectedMileage].PreFinanceCost == '0.00%') {
		$('#CarFinanceMontlyCostInfo').html($('#CarFinanceMontlyCostInfo').html().replace('[PreFinanceCost]', ''));
	}
	else {
		$('#CarFinanceMontlyCostInfo').html($('#CarFinanceMontlyCostInfo').html().replace('[PreFinanceCost]', '<span style="color: #f5821e">' + IQFautos[selectedCar].Terms[selectedTerm].Mileages[selectedMileage].PreFinanceCost + '</span>'));
	}
	if(selectedFinancing == 2) {
		$('#CarFinanceMontlyCostInfo').html($('#CarFinanceMontlyCostInfo').html().replace('[AvgMarketInterestRate]', '<span style="color: #f5821e">' + IQFautos[selectedCar].Terms[selectedTerm].Mileages[selectedMileage].AvgMarketInterestRateOwnFunds + '</span>'));
	}
	else {
		$('#CarFinanceMontlyCostInfo').html($('#CarFinanceMontlyCostInfo').html().replace('[AvgMarketInterestRate]', '<span style="color: #f5821e">' + IQFautos[selectedCar].Terms[selectedTerm].Mileages[selectedMileage].AvgMarketInterestRate + '</span>'));
	}
	
}

/*
function sendEmail() {

	var o = {};
    var sValues = { sValues: o };
	o.emailTo = $('[name="contactEmail"]').val();//ContactPage.EmailTo;
	o.emailSubject = ContactPage.EmailSubject;

	if($('[name="ContactPageSuffix"]:checked').val() != null && $('[name="ContactPageSuffix"]:checked').val() != 'undefined') {
		o.contactPageSuffix = $('[name="ContactPageSuffix"]:checked').val();
	}
	
	o.contactName = $('[name="contactName"]').val();
	o.contactEmail = $('[name="contactEmail"]').val();
	o.contactPhone = $('[name="contactPhone"]').val();
	o.contactVehicles = $('[name="contactVehicles"]').val();
	
	if($('[name="ContactPageTailoredReportOption"]:checked') != null && $('[name="ContactPageTailoredReportOption"]:checked').val() != 'undefined') {
		o.contactPageTailoredReportOption = $('[name="ContactPageTailoredReportOption"]:checked').val();
	}
	if($('#ContactPageExtraField1').text() != '0') {
		o.optional1 = $('[name="optional1"]').val();
	}
	if($('#ContactPageExtraField2').text() != '0') {
		o.optional2 = $('[name="optional2"]').val();
	}
	if($('#ContactPageExtraField3').text() != '0') {
		o.optional3 = $('[name="optional3"]').val();
	}
	if($('#ContactPageExtraField4').text() != '0') {
		o.optional4 = $('[name="optional4"]').val();
	}
	if($('#ContactPageExtraField5').text() != '0') {
		o.optional5 = $('[name="optional5"]').val();
	}
	if($('#ContactPageExtraField6').text() != '0') {
		o.optional6 = $('[name="optional6"]').val();
	}
	if($('#ContactPageExtraField7').text() != '0') {
		o.optional7 = $('[name="optional7"]').val();
	}
	
	
	$.ajax({
		type: "POST"
		, url: "mail.php"
		, data: sValues
		, success: function(result) {
			if(result === 'INVALID-EMAIL') {
				alert('Please check your email address for errors');
			}
			if(result === 'NO-EMAIL') {
				alert('Please fill in your email address');
			}
			if(result === 'OK') {
				alert('Thank you for contacting us.');
			}
		}
		, error: function(XMLHttpRequest, textStatus, errorThrown) {
			alert('Something went wrong, if you keep recieving this message please contact +1234567890 for more information');
		}
	});
}
*/
