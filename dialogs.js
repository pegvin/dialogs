window.alert = function (message) {
	return new Promise(function (resolve, reject) {
		neutralinojsAlert = document.createElement("div");
		neutralinojsAlertBox = document.createElement("div");
		neutralinojsAlertMessage = document.createElement("div");
		neutralinojsAlertConfirmBtn = document.createElement("button");
		neutralinojsAlertAPC = document.createElement("div");

		neutralinojsAlertMessage.innerText = message;

		neutralinojsAlertMessage.className = "neutralinojs_alert_message";
		neutralinojsAlertConfirmBtn.className = "neutralinojs_alert_ok_btn";
		neutralinojsAlertAPC.className = "neutralinojs_APC_buttons";
		neutralinojsAlertBox.className = "neutralinojs_APC_box";
		neutralinojsAlert.className = "neutralinojs_alert";

		neutralinojsAlertConfirmBtn.innerText = "OK";
		neutralinojsAlertConfirmBtn.addEventListener("click", function(e) {
			neutralinojsAlert.remove();
			resolve(true);
		});

		neutralinojsAlertAPC.appendChild(neutralinojsAlertConfirmBtn);
		neutralinojsAlertBox.appendChild(neutralinojsAlertMessage);
		neutralinojsAlertBox.appendChild(neutralinojsAlertAPC);
		neutralinojsAlert.appendChild(neutralinojsAlertBox);
		document.body.appendChild(neutralinojsAlert);
	})
}

window.confirm = function (message) {
	return new Promise(function (resolve, reject) {
		neutralinojsConfirm = document.createElement("div");
		neutralinojsConfirmBox = document.createElement("div");
		neutralinojsConfirmMessage = document.createElement("div");
		neutralinojsConfirmConfirmBtn = document.createElement("button");
		neutralinojsConfirmCancelBtn = document.createElement("button");
		neutralinojsConfirmAPC = document.createElement("div");

		neutralinojsConfirmMessage.innerText = message;

		neutralinojsConfirmMessage.className = "neutralinojs_alert_message";
		neutralinojsConfirmConfirmBtn.className = "neutralinojs_alert_ok_btn";
		neutralinojsConfirmCancelBtn.className = "neutralinojs_alert_cancel_btn";
		neutralinojsConfirmAPC.className = "neutralinojs_APC_buttons";
		neutralinojsConfirmBox.className = "neutralinojs_APC_box";
		neutralinojsConfirm.className = "neutralinojs_alert";

		neutralinojsConfirmConfirmBtn.innerText = "OK";
		neutralinojsConfirmCancelBtn.innerText = "Cancel";
		neutralinojsConfirmConfirmBtn.addEventListener("click", function(e) {
			neutralinojsConfirm.remove();
			resolve(true)
		});

		neutralinojsConfirmCancelBtn.addEventListener("click", function(e) {
			neutralinojsConfirm.remove();
			resolve(false)
		});

		neutralinojsConfirmAPC.appendChild(neutralinojsConfirmCancelBtn);
		neutralinojsConfirmAPC.appendChild(neutralinojsConfirmConfirmBtn);

		neutralinojsConfirmBox.appendChild(neutralinojsConfirmMessage);
		neutralinojsConfirmBox.appendChild(neutralinojsConfirmAPC);
		neutralinojsConfirm.appendChild(neutralinojsConfirmBox);
		document.body.appendChild(neutralinojsConfirm);
	})
}

window.prompt = function (message, defaultText) {
	return new Promise(function (resolve, reject) {
		if (!defaultText) {
			defaultText = ""
		}

		neutralinojsPrompt = document.createElement("div");
		neutralinojsPromptBox = document.createElement("div");
		neutralinojsPromptMessage = document.createElement("div");
		neutralinojsPromptInput = document.createElement("input");
		neutralinojsPromptConfirmBtn = document.createElement("button");
		neutralinojsPromptCancelBtn = document.createElement("button");
		neutralinojsPromptAPC = document.createElement("div");

		neutralinojsPromptMessage.innerText = message;
		neutralinojsPromptInput.value = defaultText;
		neutralinojsPromptInput.type = "text";

		neutralinojsPromptMessage.className = "neutralinojs_alert_message";
		neutralinojsPromptInput.className = "neutralinojs_prompt_input";
		neutralinojsPromptConfirmBtn.className = "neutralinojs_alert_ok_btn";
		neutralinojsPromptCancelBtn.className = "neutralinojs_alert_cancel_btn";
		neutralinojsPromptAPC.className = "neutralinojs_APC_buttons";
		neutralinojsPromptBox.className = "neutralinojs_APC_box";
		neutralinojsPrompt.className = "neutralinojs_alert";

		neutralinojsPromptConfirmBtn.innerText = "OK";
		neutralinojsPromptCancelBtn.innerText = "Cancel";
		neutralinojsPromptConfirmBtn.addEventListener("click", function(e) {
			neutralinojsPrompt.remove();
			resolve(neutralinojsPromptInput.value)
		});

		neutralinojsPromptCancelBtn.addEventListener("click", function(e) {
			neutralinojsPrompt.remove();
			resolve(null)
		});

		neutralinojsPromptAPC.appendChild(neutralinojsPromptCancelBtn);
		neutralinojsPromptAPC.appendChild(neutralinojsPromptConfirmBtn);

		neutralinojsPromptBox.appendChild(neutralinojsPromptMessage);
		neutralinojsPromptBox.appendChild(neutralinojsPromptInput);
		neutralinojsPromptBox.appendChild(neutralinojsPromptAPC);
		neutralinojsPrompt.appendChild(neutralinojsPromptBox);
		document.body.appendChild(neutralinojsPrompt);
	})
}
