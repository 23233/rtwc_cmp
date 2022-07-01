import Swal from 'sweetalert2';

// 中文版的swal
const Cwal = Swal.mixin({
  cancelButtonText: '取消',
  confirmButtonText: '确定',
  customClass: {
    container: 'cwal-warp',
  },
});
export default Cwal;
