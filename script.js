 let array = JSON.parse(localStorage.getItem("todos")) || []
        let input = document.getElementById("input")
        //   Track
        let track=document.getElementById("track-text")
        let first=document.getElementById("first")
        let last=document.getElementById("last")
        //    Track
        // Img
        let img=document.getElementById("img")

        // Img
        function addtodo() {
            let data = input.value.trim();
            if (data !== "") {
                array.push({ text: data, completed: false })
                localStorage.setItem("todos", JSON.stringify(array));
                input.value = ""
                showtodo()
                image()
            }
        }

        function showtodo() {
            // Creating Main-Div
            let div = document.getElementById("div")
            div.innerHTML = " "
            counter()
            image()
            // Creating Main-Div

            // Using For each
            array.forEach((element, index) => {
                // Creating outer div(inside main div)
                let outer = document.createElement("div")
                outer.classList.add("content")
                div.append(outer)
                // Creating outer div(inside main div)

                // Tick Element
                let ischange=false
                let tick = document.createElement("span")
                tick.classList.add("tick")
                outer.append(tick)
                tick.addEventListener("click", (function tickk() {
                    array[index].completed = !array[index].completed
                    localStorage.setItem("todos", JSON.stringify(array))
                    showtodo()
                    image()
                }))
                // Tick Element

                // Creating newdiv (inside outer div)
                let newdiv = document.createElement("span")
                newdiv.classList.add("text")
                outer.append(newdiv)
                counter()
                newdiv.textContent = element.text
                if (element.completed) {
                    newdiv.style.textDecoration = "line-through" 
                    tick.innerHTML=`<i class="fa-solid fa-check" id="tt"></i>` 
                    tick.style.backgroundColor="brown" 
                }
                // Creating newdic (inside outer div)



                // Removing Element
                let remove = document.createElement("span")
                remove.innerHTML = '<i class="fa-solid fa-trash" id="trash"></i>'
                remove.classList.add("remove")
                outer.append(remove)
                remove.addEventListener("click", function () {
                    array.splice(index, 1)
                    localStorage.setItem("todos", JSON.stringify(array))
                    showtodo()
                     image()
                    
                })
                // Removing Element
                // editing element
                let edit = document.createElement("span")
                edit.innerHTML = `<i class="fa-solid fa-pen-to-square" id="edit_font"></i>`
                edit.classList.add("edit")
                outer.append(edit)
                edit.addEventListener("click", (() => {
                    if (input.value.length < 1) {
                        input.value = element.text
                        array.splice(index, 1)
                        localStorage.setItem("todos", JSON.stringify(array))
                        showtodo()
                         image()
                    }
                }))
                // editing element

            })
        }
        window.onload = function () {
            showtodo()
            console.log(array)
        }
        // Counter

        function counter(){
            // For total Task Count
              let totalcount=array.length
              last.textContent=totalcount
            // For Completed Task Count
             let finished=array.filter((e)=>{
                if(e.completed){
                    return e
                }
             }).length
             first.textContent=finished
             if(totalcount!=0 && finished!=0 && totalcount==finished){
                track.textContent="Wow You Made It💥"
             }
             else{
                 track.textContent="Keep It Up🎯"
             }
        }

        // Image
        function image(){
            if(array.length>=1){
                img.style.display="none"
            }
            else{
                img.style.display="block"
            }
        }
        
//     </script>
//     <!-- <h1 id="h1">1</h1>
//     <button onclick="fn()">click</button>
//     <button onclick="rem()">Remove</button>
//   <script>
//      let arr=JSON.parse(localStorage.getItem("num")) || []
//      let i=0
//       let h1=document.getElementById("h1")
//     function fn(){
//         i++
//         arr.push(i)
//         localStorage.setItem("num",JSON.stringify(arr))
//         console.log(arr)
//          showfn()
//     }

//     function showfn(){
//     h1.textContent=arr.length
//     }
//     function rem(){
//         arr.pop(1)
//         localStorage.setItem("num",JSON.stringify(arr))
//         showfn()
//         console.log(arr)
//     }
//     window.onload=function win(){
//        showfn()
//     } --></script>