const checkbox = document.getElementById("toggle");

console.log(checkbox);

// استعادة الحالة من localStorage عند تحميل الصفحة
window.addEventListener("load", () => {
  const isChecked = localStorage.getItem("toggle") === "true";
  checkbox.checked = isChecked;
});

// حفظ الحالة في localStorage عند تغييرها
checkbox.addEventListener("change", () => {
  localStorage.setItem("toggle", checkbox.checked);
});
