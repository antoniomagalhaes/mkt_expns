var dcf = false;
var dcc = false;
var ddt = false;
var dmm = false;
var dcs = false;

var animateTime = 700;

$(document).ready(function($) {
    $('#btn-details-carfinance').click(function() {
		
		//var selId = $(this).attr('id');
		//_gaq.push(['_trackEvent', 'Interacoes', 'Click', selId]);
        toggleDetails('details-carfinance', 'dcf', null, true);
    });
    $('#btn-details-carcosts').click(function() {
		//var selId = $(this).attr('id');
		//_gaq.push(['_trackEvent', 'Interacoes', 'Click', selId]);
        toggleDetails('details-carcosts', 'dcc', null, true);
    });
    $('#btn-details-downtime').click(function() {
		//var selId = $(this).attr('id');
		//_gaq.push(['_trackEvent', 'Interacoes', 'Click', selId]);
        toggleDetails('details-downtime', 'ddt', null, true);
    });
    $('#btn-details-management').click(function() {
		//var selId = $(this).attr('id');
		//_gaq.push(['_trackEvent', 'Interacoes', 'Click', selId]);
        toggleDetails('details-management', 'dmm', null, true);
    });
    $('#btn-details-carsale').click(function() {
		//var selId = $(this).attr('id');
		//_gaq.push(['_trackEvent', 'Interacoes', 'Click', selId]);
        toggleDetails('details-carsale', 'dcs', null, true);
    });
    $('#ComparisonPagePrintButton').click(function() {
		//var selId = $(this).attr('id');
		//_gaq.push(['_trackEvent', 'Interacoes', 'Click', selId]);
        openAll();
        setTimeout("window.print();", animateTime * 2);
    });
});

function toggleDetails(currentId, current, close, closeothers) {
    if(closeothers)
        closeOthers(current);
        
    eval('currentB = ' + current + ';');

    if (close !== null) {
        currentB = close;
    }
    
    if (currentB) {
        setTimeout("$('#"+currentId+"').slideUp(" + animateTime + ", function() {});", animateTime / 4);
        $('#' + currentId + ' .toggle').slideUp(animateTime, function() { });
        $('#btn-' + currentId + ' .button-light').text(ComparisonPage.Open);
        eval('' + current + '= false;');
    }
    else {
        setTimeout("$('#"+currentId+" .toggle').slideDown(" + animateTime + ", function() {});", animateTime / 4);
        $('#' + currentId + '').slideDown(animateTime, function() { });
        $('#btn-' + currentId + ' .button-light').text(ComparisonPage.Close);
        eval('' + current + '= true;');
    }
}

function closeOthers(currentId) {
    if (currentId == 'dcf') {
        toggleDetails('details-carcosts', 'dcc', true, false);
        toggleDetails('details-downtime', 'ddt', true, false);
        toggleDetails('details-management', 'dmm', true, false);
        toggleDetails('details-carsale', 'dcs', true, false);
    }
    if (currentId == 'dcc') {
        toggleDetails('details-carfinance', 'dcf', true, false);
        toggleDetails('details-downtime', 'ddt', true, false);
        toggleDetails('details-management', 'dmm', true, false);
        toggleDetails('details-carsale', 'dcs', true, false);
    }
    if (currentId == 'ddt') {
        toggleDetails('details-carfinance', 'dcf', true, false);
        toggleDetails('details-carcosts', 'dcc', true, false);
        toggleDetails('details-management', 'dmm', true, false);
        toggleDetails('details-carsale', 'dcs', true, false);
    }
    if (currentId == 'dmm') {
        toggleDetails('details-carfinance', 'dcf', true, false);
        toggleDetails('details-carcosts', 'dcc', true, false);
        toggleDetails('details-downtime', 'ddt', true, false);
        toggleDetails('details-carsale', 'dcs', true, false);
    }
    if (currentId == 'dcs') {
        toggleDetails('details-carfinance', 'dcf', true, false);
        toggleDetails('details-carcosts', 'dcc', true, false);
        toggleDetails('details-downtime', 'ddt', true, false);
        toggleDetails('details-management', 'dmm', true, false);
    }
}


function openAll() {
    toggleDetails('details-carfinance', 'dcf', false, false);
    toggleDetails('details-carcosts', 'dcc', false, false);
    toggleDetails('details-downtime', 'ddt', false, false);
    toggleDetails('details-management', 'dmm', false, false);
    toggleDetails('details-carsale', 'dcs', false, false);
}