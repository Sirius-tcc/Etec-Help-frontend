

const lorem ="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."


function random(maxNumber, zero=0){
    return Math.floor((Math.random() * maxNumber) + zero);
 }
 
 function getText(string, firstNumber, secondNumber ){
     let text = '' 
 
     if (firstNumber < secondNumber){
         for(let i=firstNumber; i < secondNumber; i++){
             text += string[i]
         }
 
         return text
     }
 
     if (firstNumber > secondNumber){
         for(let i=secondNumber; i < firstNumber; i++){
             text += string[i]
         }
 
         return text
     }
 
     secondNumber++
     for(let i=firstNumber; i < secondNumber; i++){
         text += string[i]
     }
 
     return text
     
 }



export default function listAllHelps(){
    let data = []

    for(let i=0; i < 100; i++){
        data.push({ 
            who: 'Tiago',
            title:getText(lorem, random(60), random(60)),
            description: getText(lorem, random(lorem.length), random(lorem.length)),
            date:`${random(31)}/${random(12)}/2020`,
            stars:random(6, 1),
            status:random(3, 0),
            subject:"Programação",
            location:getText(lorem, random(20), random(20)),
        })
    }
    
    return data
} 


