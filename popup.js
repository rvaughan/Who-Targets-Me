$(document).ready(function() {
	$('body').on('click', 'a', function(){
		chrome.tabs.create({url: $(this).attr('href')});
		return false;
	});

    document.getElementById('detailsLink').addEventListener('click', function (e) { 
        chrome.tabs.create({ 
            url: chrome.extension.getURL('details.html') 
        }); 
        window.close(); 
    });
})
