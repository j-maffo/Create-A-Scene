// Stars // appears
function drawStars() {
  c.fillStyle = "rgb(241, 241, 213)";
  let x = 285;
  let y = 129;
  c.beginPath();
  c.moveTo(x, y); // tip
  c.lineTo((x += 2.5), (y += 5)); // top right corner
  c.lineTo((x += 5), y); // mid right tip
  c.lineTo((x -= 3.5), (y += 2.5)); // mid right corner
  c.lineTo((x += 1.5), (y += 5)); // low right tip
  c.lineTo((x -= 5.5), (y -= 2.5)); // center corner
  c.lineTo((x -= 5.5), (y += 2.5)); // low left tip
  c.lineTo((x += 1.5), (y -= 5)); // mid left corner
  c.lineTo((x -= 3.5), (y -= 2.5)); // mid left tip
  c.lineTo((x += 5), y); // top left corner
  c.lineTo((x += 2.5), (y -= 5.5)); // tip
  c.fill();
  c.fillStyle = "rgb(241, 241, 213)";
  x = 565;
  y = 125;
  c.beginPath();
  c.moveTo(x, y); // tip
  c.lineTo((x += 2.5), (y += 5)); // top right corner
  c.lineTo((x += 5), y); // mid right tip
  c.lineTo((x -= 3.5), (y += 2.5)); // mid right corner
  c.lineTo((x += 1.5), (y += 5)); // low right tip
  c.lineTo((x -= 5.5), (y -= 2.5)); // center corner
  c.lineTo((x -= 5.5), (y += 2.5)); // low left tip
  c.lineTo((x += 1.5), (y -= 5)); // mid left corner
  c.lineTo((x -= 3.5), (y -= 2.5)); // mid left tip
  c.lineTo((x += 5), y); // top left corner
  c.lineTo((x += 2.5), (y -= 5.5)); // tip
  c.fill();
  c.fillStyle = "rgb(241, 241, 213)";
  x = 99;
  y = 99;
  c.beginPath();
  c.moveTo(x, y); // tip
  c.lineTo((x += 2.5), (y += 5)); // top right corner
  c.lineTo((x += 5), y); // mid right tip
  c.lineTo((x -= 3.5), (y += 2.5)); // mid right corner
  c.lineTo((x += 1.5), (y += 5)); // low right tip
  c.lineTo((x -= 5.5), (y -= 2.5)); // center corner
  c.lineTo((x -= 5.5), (y += 2.5)); // low left tip
  c.lineTo((x += 1.5), (y -= 5)); // mid left corner
  c.lineTo((x -= 3.5), (y -= 2.5)); // mid left tip
  c.lineTo((x += 5), y); // top left corner
  c.lineTo((x += 2.5), (y -= 5.5)); // tip
  c.fill();
  c.fillStyle = "rgb(241, 241, 213)";
  x = 328;
  y = 19;
  c.beginPath();
  c.moveTo(x, y); // tip
  c.lineTo((x += 2.5), (y += 5)); // top right corner
  c.lineTo((x += 5), y); // mid right tip
  c.lineTo((x -= 3.5), (y += 2.5)); // mid right corner
  c.lineTo((x += 1.5), (y += 5)); // low right tip
  c.lineTo((x -= 5.5), (y -= 2.5)); // center corner
  c.lineTo((x -= 5.5), (y += 2.5)); // low left tip
  c.lineTo((x += 1.5), (y -= 5)); // mid left corner
  c.lineTo((x -= 3.5), (y -= 2.5)); // mid left tip
  c.lineTo((x += 5), y); // top left corner
  c.lineTo((x += 2.5), (y -= 5.5)); // tip
  c.fill();
}

// Kids - Stick figure
function drawKid1(x, y) {
  // Head
  c.fillStyle = "rgb(119, 81, 50)";
  c.beginPath();
  c.arc(x, y, 25, 0, 2 * Math.PI);
  c.fill();

  // Eyes
  // Left eye
  c.linewidth = 5;
  c.strokeStyle = "black";
  c.beginPath();
  c.moveTo(x - 10, y - 10);
  c.lineTo(x - 10, y);
  c.stroke();
  // Right eye
  c.linewidth = 5;
  c.strokeStyle = "black";
  c.beginPath();
  c.moveTo(x + 10, y - 10); // eye
  c.lineTo(x + 10, y); // eye
  c.stroke();
  // Mouth
  c.fillStyle = "black";
  c.beginPath();
  c.arc(x, y + 12, 5, 0, 2 * Math.PI);
  c.fill();
  // Torso
  c.linewidth = 5;
  c.strokeStyle = "black";
  c.beginPath();
  c.moveTo(x, y + 25); // chin
  c.lineTo(x, y + 125); // pelvis
  c.stroke();
  // Legs
  c.linewidth = 5;
  c.strokeStyle = "black";
  c.beginPath();
  c.moveTo(x, y + 125); // pelvis
  c.lineTo(x - 20, y + 160); // left foot
  c.stroke();

  c.linewidth = 5;
  c.strokeStyle = "black";
  c.beginPath();
  c.moveTo(x, y + 125); // pelvis
  c.lineTo(x + 20, y + 160); // right foot
  c.stroke();
  // Hands
  c.linewidth = 5;
  c.strokeStyle = "black";
  c.beginPath();
  c.moveTo(x, y + 50); // mid torso
  c.lineTo(x + 30, y + 90); // right hand
  c.stroke();

  c.linewidth = 5;
  c.strokeStyle = "black";
  c.beginPath();
  c.moveTo(x, y + 50); // mid torso
  c.lineTo(x - 30, y + 90); // left hand
  c.stroke();

  // Hair
  let blondHair = document.getElementById("blond-img");
  c.drawImage(blondHair, x - 50, y - 32, 90, 90);
}

function drawKid2(x, y) {
  // Head
  c.fillStyle = "rgb(231, 188, 168)";
  c.beginPath();
  c.arc(x, y, 25, 0, 2 * Math.PI);
  c.fill();

  // Eyes
  // Left eye 2
  c.fillStyle = "rgb(52, 94, 33)";
  c.beginPath();
  c.arc(x - 10, y - 5, 5, 0, 2 * Math.PI);
  c.fill();
  // Right eye 2
  c.fillStyle = "rgb(52, 94, 33)";
  c.beginPath();
  c.arc(x + 10, y - 5, 5, 0, 2 * Math.PI);
  c.fill();

  // Mouth
  c.linewidth = 3;
  c.strokeStyle = "black";
  c.beginPath();
  c.moveTo(x - 7, y + 7);
  c.lineTo(x + 8, y + 7);
  c.stroke();

  // Torso
  c.linewidth = 5;
  c.strokeStyle = "black";
  c.beginPath();
  c.moveTo(x, y + 25); // chin 2
  c.lineTo(x, y + 125); // pelvis 2
  c.stroke();

  // Legs
  c.linewidth = 5;
  c.strokeStyle = "black";
  c.beginPath();
  c.moveTo(x, y + 125); // pelvis 2
  c.lineTo(x - 20, y + 160); // left foot 2
  c.stroke();

  c.linewidth = 5;
  c.strokeStyle = "black";
  c.beginPath();
  c.moveTo(x, y + 125); // pelvis 2
  c.lineTo(x + 20, y + 160); // right foot 2
  c.stroke();
  // 450, 300
  // Hands
  c.linewidth = 5;
  c.strokeStyle = "black";
  c.beginPath();
  c.moveTo(x, y + 50); // mid torso
  c.lineTo(x + 30, y + 90); // right hand
  c.stroke();

  c.linewidth = 5;
  c.strokeStyle = "black";
  c.beginPath();
  c.moveTo(x, y + 50); // mid torso
  c.lineTo(x - 30, y + 90); // left hand
  c.stroke();

  // Hair
  let shortHair = document.getElementById("short-img");
  c.drawImage(shortHair, x - 40, y - 40, 75, 64);
}

// Ball // move to the right
function drawBall(x, y) {
  // socer ball is 30 other bal is 50 50
  c.drawImage(soccerBallImg, x, y, 30, 30);
}
