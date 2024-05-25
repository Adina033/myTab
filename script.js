const tabButtons = document.querySelectorAll('.tablink');

for(let i in tabButtons){
    tabButtons[i].addEventListener('click', () => {
        let tabName = tabButtons[i].dataset.id;
        let tabContent = document.getElementById(tabName);

        let allTabContent = document.querySelectorAll('.tab-text');
        let allTabButtons = document.querySelectorAll('.tablink');

        for(let j = 0; j < allTabContent.length; j ++){
            allTabContent[j].style.display = 'none';
        }
        for(let m = 0; m < allTabButtons.length; m ++){
            allTabButtons[m].classList.remove('active')
        }


        console.log(tabContent);
        tabContent.style.display = "block";
        tabButtons[i].classList.add('active');
    })

}