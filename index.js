

            function addItem() {

                var tx=document.getElementById("candidate");
                if(tx.value.length <=0){
                        alert("Enter data in text box");
                        tx.focus();
                        return false;
                }
                
                var a = document.getElementById("list");
                var candidate = document.getElementById("candidate");
                var li = document.createElement("li");
                li.setAttribute('id', candidate.value);
                li.appendChild(document.createTextNode(candidate.value));
                a.appendChild(li);
                
            }

            // for remove 
            function removeItem() {
                var tx=document.getElementById("candidate");
                if(tx.value.length <=0){
                        alert("Enter data in text box");
                        tx.focus();
                        return false;
                }
                var a = document.getElementById("list");
                var candidate = document.getElementById("candidate");
                var item = document.getElementById(candidate.value);
                a.removeChild(item);
            }

            const circle=document.querySelector('.theDiv');
            const circles=document.querySelector('.theDiv2');
            const whiteBox=document.getElementsByClassName('whiteBoxes');
            // const whiteBoxs=document.getElementsByClassName('whiteBoxes1');

            circle.addEventListener('dragstart', (e)=>{
                console.log('drag start');
                e.target.className += ' hold';
            })
            circle.addEventListener('dragend', (e)=>{
                console.log('drag end');
                e.target.className = 'theDiv';
            })

            //whiteboxes listener

            whiteBoxes.addEventListener('dragover',(e)=>{
                e.preventDefault();
                console.log('dragover');
                
            })

            whiteBoxes.addEventListener('dragenter',(e)=>{
                console.log('dragenter');
            })

            whiteBoxes.addEventListener('dragleave',(e)=>{
                console.log('dragleave');
            })

            whiteBoxes.addEventListener('drop',(e)=>{
                console.log('drop');
                e.target.appendChild(theDiv1);
                
            })


            //for remove
            // whiteBoxes1.addEventListener('dragover',(e)=>{
            //     e.preventDefault();
            //     console.log('dragover');
                
            // })

            // whiteBoxes1.addEventListener('drop',(e)=>{
            //     console.log('drop');
            //     e.target.className += ' hold';
            // })

