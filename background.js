var requestFilter = {
	urls: ["<all_urls>"]
};

chrome.webRequest.onBeforeSendHeaders.addListener(function(details) {
	var headers = details.requestHeaders;
	for(var i = 0, l = headers.length; i < l; ++i) {
		if( headers[i].name === 'User-Agent' ) {
			break;
		}
	}
	if(i < headers.lengths) {
            //headers[i].value = headers[i].value.replace(/(Mozilla\/\d+\.\d+ )\([^\)]+\)/, "\$1(Linux; Android 4.4.2; Nexus 4 Build/KOT49H)");
            //headers[i].value = headers[i].value.replace(/Safari/, "Mobile Safari");
            headers[i].value = "Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.114 Mobile Safari/537.36";
	}
	return {requestHeaders: headers};
}, requestFilter, ['requestHeaders','blocking']);
