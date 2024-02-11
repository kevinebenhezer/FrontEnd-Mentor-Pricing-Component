const toggleButton = document.querySelector("input[type=checkbox]");
const basicPricing = document.getElementById("basic-pricing");
const professionalPricing = document.getElementById("professional-pricing");
const masterPricing = document.getElementById("master-pricing");

toggleButton.addEventListener("click", toggleFunction);

function toggleFunction() {
	if (toggleButton.hasAttribute("checked")) {
		basicPricing.innerHTML = "&dollar;199.99";
		professionalPricing.innerHTML = "&dollar;249.99";
		masterPricing.innerHTML = "&dollar;399.99";
		toggleButton.removeAttribute("checked");
	} else {
		basicPricing.innerHTML = "&dollar;19.99";
		professionalPricing.innerHTML = "&dollar;24.99";
		masterPricing.innerHTML = "&dollar;39.99";
		toggleButton.setAttribute("checked", "true");
	}
}
