(function () {

    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let equal = document.querySelector(".btn-equal");
    let clear = document.querySelector(".btn-clear");

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });
    equal.addEventListener('click', function(e){
        if(screen.value === '') {
            screen.value = "Please enter a value";
        }
        else {
            try {
                let result = evaluate(screen.value);
                screen.value = result;
            } catch (e) {
                screen.value = "Error";
            }
        }
    });

    function evaluate(str) {
        let result;
        try {
          result = Function('return (' + str + ')')();
        } catch (e) {
          result = "Error";
        }
        return result;
      }
    clear.addEventListener('click', function(e){
        screen.value = ""

    })


})();



// (function () {

//     let screen = document.querySelector(".screen");
//     let buttons = document.querySelectorAll(".btn");
//     let equal = document.querySelector(".btn-equal");
//     let clear = document.querySelector(".btn-clear");

//     buttons.forEach(function(button){
//         button.addEventListener('click', function(e){
//             let value = e.target.dataset.num;
//             screen.value += value;
//         })
//     });

//     equal.addEventListener('click', function(e){
//         let result;
//         try {
//             result = eval(screen.value);
//         } catch (e) {
//            screen = result;
//         }
//         screen.value = result;
//     });

//     clear.addEventListener('click', function(e){
//         screen.value = "";
//     });

// })();


// (function () {

//     let screen = document.querySelector(".screen");
//     let buttons = document.querySelectorAll(".btn");
//     let equal = document.querySelector(".btn-equal");
//     let clear = document.querySelector(".btn-clear");

//     buttons.forEach(function(button){
//         button.addEventListener('click', function(e){
//             let value = e.target.dataset.num;
//             screen.value += value;
//         })
//     });

   
//     equal.addEventListener('click', function(e){
//         if(screen.value === '') {
//             screen.value = "Please";
//         }
//         else {
//             const result = eval(screen.value);
//             screen.value = result
//         }
//     });
//     clear.addEventListener('click', function(e){
//         screen.value = "";
//     });

// })();

