function verifyLight() {
      let color = document.getElementById('light').value.trim().toLowerCase();

      switch (color) {
        case 'red':
          alert("STOP!");
          break;
        case 'yellow':
          alert("CAUTION!");
          break;
        case 'green':
          alert("GO!");
          break;
        default:
          alert("ERROR - Unknown color.");
      }
    }

    function refreshPage() {
      location.reload();
    }