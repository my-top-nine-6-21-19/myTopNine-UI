class Members{
    constructor(member){
        this.member = member;

    }
}


const members = document.querySelectorAll('.box').forEach(member => new Members(member));


