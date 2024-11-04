// Jawaban benar untuk tiap cell
const correctAnswers = {
    "cell-1": "T", "cell-2": "E", "cell-3": "C", "cell-4": "H", "cell-5": "N","cell-6": "O", "cell-7": "L", "cell-8": "O", "cell-9": "G", "cell-10": "Y",
    "cell-11": "I", "cell-12": "I", "cell-13": "O", "cell-14": "V", "cell-15": "I",
    "cell-16": "S", "cell-17": "T", "cell-18": "A", "cell-19": "N", "cell-20": "U",
    "cell-21": "C", "cell-22": "N", "cell-23": "E", "cell-24": "T", "cell-25": "O",
    "cell-26": "D", "cell-27": "S", "cell-28": "A", "cell-29": "U", "cell-30": "R",
    "cell-31": "R", "cell-32": "B", "cell-33": "O", "cell-34": "E", "cell-35": "L",
    "cell-36": "I", "cell-37": "N", "cell-38": "U", "cell-39": "X", "cell-40": "D",
    "cell-41": "F", "cell-42": "S" , "cell-43": "A" , "cell-44": "F" , "cell-45": "E"
};

const correctWords = {
    "Nomor1" : [
      correctAnswers["cell-1"],
      correctAnswers["cell-2"],
      correctAnswers["cell-3"],
      correctAnswers["cell-4"],
      correctAnswers["cell-5"],
      correctAnswers["cell-6"],
      correctAnswers["cell-7"],
      correctAnswers["cell-8"],
      correctAnswers["cell-9"],
      correctAnswers["cell-10"]],

    "Nomor2" : [
        correctAnswers["cell-3"],
        correctAnswers["cell-11"],
        correctAnswers["cell-16"],
        correctAnswers["cell-21"],
        correctAnswers["cell-25"]],

    "Nomor3" : [
      correctAnswers["cell-14"],
      correctAnswers["cell-15"],
      correctAnswers["cell-16"],
      correctAnswers["cell-17"],
      correctAnswers["cell-18"]],

    "Nomor4" : [
      correctAnswers["cell-7"],
      correctAnswers["cell-12"],
      correctAnswers["cell-19"],
      correctAnswers["cell-23"],
      correctAnswers["cell-28"],
      correctAnswers["cell-31"]],

     "Nomor5" : [
       correctAnswers["cell-26"],
       correctAnswers["cell-27"],
       correctAnswers["cell-28"]],

     "Nomor6" : [
       correctAnswers["cell-10"],
       correctAnswers["cell-13"],
       correctAnswers["cell-20"],
       correctAnswers["cell-24"],
       correctAnswers["cell-29"],
       correctAnswers["cell-32"],
       correctAnswers["cell-34"]],

      "Nomor7" : [
        correctAnswers["cell-35"],
        correctAnswers["cell-36"],
        correctAnswers["cell-37"],
        correctAnswers["cell-38"],
        correctAnswers["cell-39"]],

      "Nomor8" : [
        correctAnswers["cell-18"],
        correctAnswers["cell-22"],
        correctAnswers["cell-26"],
        correctAnswers["cell-30"],
        correctAnswers["cell-33"],
        correctAnswers["cell-36"],
        correctAnswers["cell-40"]],

      "Nomor9" : [
        correctAnswers["cell-42"],
        correctAnswers["cell-43"],
        correctAnswers["cell-44"],
        correctAnswers["cell-45"]],

      "Nomor10" : [
        correctAnswers["cell-38"],
        correctAnswers["cell-41"],
        correctAnswers["cell-42"]]

}
// Fungsi untuk menghitung skor
function calculateScore() {
    let score = 0;
    for (const [cellId, correctAnswer] of Object.entries(correctAnswers)) {
        const cellInput = document.getElementById(cellId);
        const bgcellInput = document.getElementById(`${cellId}r`)
        if ((cellInput.value.toUpperCase() === correctAnswer)&&cellInput.value != '') {
            score += 1; // Menambah skor jika jawaban benar
            bgcellInput.style.backgroundColor = "lightgreen"; // Menandai jawaban benar
        } else if((cellInput.value.toUpperCase() !== correctAnswer)&&cellInput.value != ''){
            bgcellInput.style.backgroundColor = "lightcoral"; // Menandai jawaban salah
        }
    }

    return score;
}

// Fungsi untuk menampilkan skor
function showScore() {
    const score = calculateScore();
    const scoreDisplay = document.querySelector(".titlecrossword h1:nth-of-type(2)");
    scoreDisplay.textContent = `Score : ${score}`;
    if(score == 45){
        alert("Selamat anda telah menyelesaikan teka teki silang dengan skor sempurna!");
    }
}

// Event listener untuk tombol cek jawaban
document.getElementById("checkScore").addEventListener("click", showScore);
