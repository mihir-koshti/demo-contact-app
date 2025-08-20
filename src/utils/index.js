import Swal from "sweetalert2";

// sweetalert for delete
export const confirmDelete = async (
  deleteId,
  resultFun = () => {},
  message = "Are you sure you want to delete this Contact?"
) => {
  const result = await Swal.fire({
    title: "Confirm Delete",
    text: message,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "Cancel",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      resultFun(deleteId);
    }
  });
};
