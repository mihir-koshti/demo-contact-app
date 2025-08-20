import Swal from "sweetalert2";

/**
 * Common delete confirmation function
 * @param id - Unique identifier of the record
 * @param onConfirm - Callback function to execute after confirmation
 * @param message - Custom confirmation message (optional, defaults to standard message)
 */

// sweetalert for delete
export const confirmDelete = async (
  deleteId: number,
  resultFun: (id: number) => void,
  message: string = "Are you sure you want to delete this Contact?"
) => {
  Swal.fire({
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
