import Swal from "sweetalert2";
import "animate.css";

export const launchAlertCenteredWithFadeInDown = (type, title, text) => {
  if (type === "success") {
    Swal.fire({
      title: title,
      text: text,
      icon: "success",
      position: "top",
      showClass: {
        popup: `
                animate__animated
                animate__fadeInDown
                animate__faster
              `,
      },
      hideClass: {
        popup: `
                animate__animated
                animate__fadeOutUp
                animate__faster
              `,
      },
    });
  }

  if (type === "fail") {
    Swal.fire({
      title: title,
      text: text,
      icon: "error",
      position: "top",
      showClass: {
        popup: `
                animate__animated
                animate__fadeInDown
                animate__faster
              `,
      },
      hideClass: {
        popup: `
                animate__animated
                animate__fadeOutUp
                animate__faster
              `,
      },
    });
  }
};
