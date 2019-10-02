let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");

// box1.children[0].innerHTML = "hey there";x
box1.addEventListener("click", changeTextBox1);
box2.addEventListener("click", changeTextBox2);
box3.addEventListener("click", changeTextBox3);
box4.addEventListener("click", changeTextBox4);

function changeTextBox1() {
  if (box1.children[0].innerHTML === "System that act like human") {
    box1.children[0].innerHTML =
      '"The art of creating machines that can perform functions that require intelligence when performed by humans (kurzweil 1990)"';
  } else {
    box1.children[0].innerHTML = "System that act like human";
  }
}

function changeTextBox2() {
  if (box2.children[0].innerHTML === "Systems that act rationally") {
    box2.children[0].innerHTML =
      '"Computational Intelligence is the study of the design of intelligent agents" (Poole et al., 1998)';
  } else {
    box2.children[0].innerHTML = "Systems that act rationally";
  }
}
function changeTextBox3() {
  if (box3.children[0].innerHTML === "System that think like human") {
    box3.children[0].innerHTML =
      '"The exciting new effort to make computers think... machine with minds, in full and literal sense (Hugeland 1985)"';
  } else {
    box3.children[0].innerHTML = "System that think like human";
  }
}
function changeTextBox4() {
  if (box4.children[0].innerHTML === "Systems that think rationally") {
    box4.children[0].innerHTML =
      '"The study of the computations that make it possible to perceive, reason, and act" (Winston 1992)';
  } else {
    box4.children[0].innerHTML = "Systems that think rationally";
  }
}
