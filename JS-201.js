         //JS-201
         let x = '';
         for (let i = 1; i <= 5; i++) {
             for (let j = 1; j <= i; j++) {
                 x += '#';
             }
             x += '\n';
         }
         console.log(x);