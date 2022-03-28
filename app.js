let all_span = document.querySelectorAll(".serialNumber")

for(let i=0 ; i<all_span.length ; i++) all_span[i].textContent = `${i+1}. `
