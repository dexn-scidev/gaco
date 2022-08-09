const ob = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting);
  });
});

ob.observe(document.getElementById("js-app"));
