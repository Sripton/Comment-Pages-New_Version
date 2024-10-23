function toggleDotsActions(dotsElement) {
  const commentElements = dotsElement.closest(".comment");
  commentElements.classList.toggle("show-actions");
}

function closeBtnActions(btnClosetElement) {
  const commentBtnElement = btnClosetElement.closest(".comment");
  commentBtnElement.classList.remove("show-actions");
}

function showReplies(button) {
  // Проверяем, есть ли уже форма ответа
  const existingForm = button.closest(".comment").querySelector(".add-comment");
  if (existingForm) {
    return;
  }
  // Клонируем шаблон формы ответа
  const replyFormTemplate = document.getElementById("reply-form-template");
  const replyFormClone = replyFormTemplate.cloneNode(true);
  replyFormClone.classList.remove("hidden");

  // Добавляем форму под соответствующий комментарий
  const commentElement = button.closest(".comment");
  const repliesDiv = commentElement.querySelector(".replies");
  repliesDiv.appendChild(replyFormClone);
}


function postReply(button) {
  const postForm = button.closest(".add-comment");
  const replyText = postForm.querySelector("textarea").value;
  if (replyText && replyText.trim() !== "") {
    const newReply = document.createElement("div");
    newReply.classList.add("comment-for-comment");
    newReply.innerHTML = `
    <p class="comment-text">
    ${replyText}
  </p>
  
  <div class="comment-actions">
  <button class="like-btn">
    <ion-icon class="thumbs" name="thumbs-up-outline"></ion-icon> 0
  </button>
  <button class="dislike-btn">
    <ion-icon class="thumbs" name="thumbs-down-outline"></ion-icon>
    0
  </button>
  <button class="reply-btn" onclick="showReplies(this)">Reply</button>
  <button class="edit-btn">Edit</button>
  <button class="delete-btn">Delete</button>
  <small class="comment-note">Комментарий добавлен</small>
</div>
    `;
    const repliesDiv = postForm.closest(".replies");
    repliesDiv.appendChild(newReply);
    postForm.remove();
  }
}

// document.addEventListener("DOMContentLoaded", () => {
//   const commentReplies = document.querySelectorAll(".comment-for-comment");
//   commentReplies.forEach((comment) => {
//     comment.classList.add("hidden");
//   });
// });

// function checkComments(){
//   const commentSection = document.querySelector('.comment-section');
//   const toggleCommentsBtn = commentSection.querySelector('.toggle-comments-btn');
//   const commentList = document.querySelectorAll('.comment-for-comment');
//   if(commentList.length > 0){
//     toggleCommentsBtn.classList.remove('hidden');
//   }else {
//     toggleCommentsBtn.classList.add('hidden');
//   }
// }
// document.addEventListener('DOMContentLoaded', () => {
//   checkComments();
// })
function toggleComments(button) {
  const commentsList = document.querySelectorAll(".comment-for-comment");
  commentsList.forEach((comment) => {
    if (comment.classList.contains("hidden")) {
      comment.classList.remove("hidden");
      button.textContent = "Hide comments";
    } else {
      comment.classList.add("hidden");
      button.textContent = "Show comments";
    }
  });
}
