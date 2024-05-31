window.addEventListener('load',function(){
    display(emojiList);
});
const table=document.getElementById('emoji_table');
function display(filteredEmojiList){
    table.innerHTML='';
    filteredEmojiList.forEach(function(emoji){
    const row=document.createElement('tr');
    const emoji_img=document.createElement('td');
    emoji_img.innerText=emoji.emoji;
    const aliases=document.createElement('td');
    aliases.innerText=emoji.aliases;
    const description=document.createElement('td');
    description.innerText=emoji.description;
    row.append(emoji_img,aliases,description);
    table.appendChild(row);
  })
}
const input=document.getElementById('text');
input.addEventListener('keydown',function(event){
    // console.log(event.target.value);
    filtered(event.target.value);
})
function filtered(value){
    const filteredEmojiList=emojiList.filter(function(emoji){
        return emoji.description.includes(value) ||emoji.aliases.includes(value)||emoji.category.includes(value);
    })
    // console.log(filteredEmojiList)
    display(filteredEmojiList);
}
table.addEventListener('click', function(event) {

    navigator.clipboard.writeText(event.target.innerText);
    
    const alertBox = document.createElement('div');
    alertBox.classList.add('alert-box');
    alertBox.textContent = `Copied: ${event.target.innerText}`;

    // alertBox.textContent=""
    document.body.appendChild(alertBox);
setTimeout(function(){
    alertBox.remove();
},500);
    

});