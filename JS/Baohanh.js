
    // Hàm kiểm tra họ và tên
     function validateName() {
      var name = document.getElementById("name").value;
      var regex = /^[a-zA-Z][a-zA-Z\s]{6,}$/;
      if (regex.test(name)) {
        return true;
      } else {
        alert("Họ và tên phải có từ 8 ký tự trở lên và không chứa ký tự đặc biệt");
        return false;
      }
    }
  
    // Hàm kiểm tra vấn đề sản phẩm
    function validateProblem() {
      var problem = document.getElementById("problem").value;
      var regex = /^[A-Z][\w\s]{0,998}[^\s]$/;
      if (regex.test(problem)) {
        return true;
      } else {
        alert("Vấn đề sản phẩm không được quá 200 từ và phải viết hoa chữ cái đầu");
        return false;
      }
    }
    

    //Hàm kiểm tra số điện thoại , email và serial 
    function validateProblem() {
      var phone = document.getElementById("phone").value;
      var email = document.getElementById("email").value;
      var serial = document.getElementById("serial").value;
      var phoneRegex = /^\d{10}$/; // regex cho số điện thoại
      var emailRegex = /^\S+@\S+\.\S+$/; // regex cho email
      var serialRegex = /^[A-Za-z0-9]{10}$/; // regex cho số serial
      if (!phoneRegex.test(phone)) {
        alert("Số điện thoại không hợp lệ");
        return false;
      }
      if (!emailRegex.test(email)) {
        alert("Email không hợp lệ");
        return false;
      }
      if (!serialRegex.test(serial)) {
        alert("Số serial không hợp lệ");
        return false;
      }
      return true;
    }
    
    // Lắng nghe sự kiện khi nhấn nút đăng ký
    document.querySelector('#btn_Submit').addEventListener('click', function (e) {
      e.preventDefault(); // Ngăn chặn việc gửi form đi
      console.log("Hi")
      if(validateName() === true && validateProblem() === true){
        // Hiện thông báo đăng ký thành công
        alert("Đăng ký bảo hành thành công");
      }
      else{
        // Hiện thông báo đăng ký thành công
        alert("Đăng ký không thành công");
      }
  
      
    });

    //Hàm nhập ô chuyển đổi border :
    let inputs = document.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('blur', function() {
        if (this.value) {
          this.style.borderColor = 'green';
        } else {
          this.style.borderColor = 'red';
        }
      });
    }
    
    let textareas = document.querySelectorAll('textarea');
    for (let i = 0; i < textareas.length; i++) {
      textareas[i].addEventListener('blur', function() {
        if (this.value) {
          this.style.borderColor = 'green';
        } else {
          this.style.borderColor = 'red';
                }
            });
         }
    

