  /*オープニングアニメーション*/
  
    const ref = document.referrer;
    const url = location.hostname;
    //const spinner = document.getElementById('loading');
    const currentNav = document.querySelector(".nav-list li:nth-child(1) a");
    //console.log(currentNav);

    //console.log(ref,url);
    if(ref.indexOf(url) == -1){
//       spinner.classList.add('from-local');
//     }else{
//       spinner.classList.add('loaded');
      currentNav.classList.add('current');
    }
