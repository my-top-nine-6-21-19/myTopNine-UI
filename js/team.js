class Members{
    constructor(article){
        this.article = article;
        this.img = this.article.querySelector('img');
        this.teamName = this.article.querySelector('.team-name');
        this.teamRole = this.article.querySelector('.team-role');
        this.teamReview = this.article.querySelector('.team-review');

        this.member = document.querySelector('.member');
        this.memberRole = this.member.querySelector('.member-role');
        this.memberName = this.member.querySelector('.team-name');
        this.teamMember = this.member.querySelector('.team-member img');
        this.review = this.member.querySelector('.member-review');
        this.img.addEventListener('click', () => this.info());
    }
    info(){
        this.memberRole.textContent = this.teamRole.textContent;
        this.memberName.textContent = this.teamName.textContent;
        this.review.textContent = this.teamReview.textContent;
        this.teamMember.src = this.img.src;
    }
}


const members = document.querySelectorAll('.box').forEach(article => new Members(article));