Vite là gì ?!

Vite là 1 công cụ build tool, nó giúp chúng ta tạo ra 1 ứng dụng web nhanh chóng, hiệu quả, dễ dàng.
Vite cung cấp trải nghiệm phát triển nhanh hơn và nhẹ hơn so với các công cụ build tool khác như Webpack, Rollup, ...
Vite sử dụng ESM(ES Module) để import module, giúp chúng ta import module mà không cần cấu hình.
Vite sử dụng HMR(Hot Module Replacement) để cập nhật nhanh chóng khi có thay đổi code.
Vite sử dụng Plugin để mở rộng tính năng.
Vite sử dụng Server để chạy ứng dụng.
Vite sử dụng Proxy để chuyển hướng request.
Vite sử dụng Plugin để mở rộng tính năng.

Vite vs Webpack

Chúng chủ yếu là các gói để biết số lượng lớn các file JS riêng biệt thành các tệp nhỏ hơn=> thu nhỏ các phiên bản
Vite tập trung vào việc phát triển nhanh chóng, hiệu quả, dễ dàng bằng cách chỉ gói các thành phần cần thiết của code trong quá trình dev
Webpack sử dụng cách tiếp cận truyền thống hơn để gói tất cả các thành phần phụ thuộc vào 1 tệp duy nhất trong quá trình dev
Webpack cung cấp nhiều tính năng mạnh mẽ hơn so với Vite như Code Splitting, Tree Shaking, ...
Các dự án lớn thì nên sử dụng Webpack, còn các dự án nhỏ thì nên sử dụng Vite
Webpack có lợi thế về hiệu suất tốt hơn trong môi truờng production, điều này do Webpack có thể tối ưu hóa kích thước và cấu trúc của gói đầu ra hiệu quả hơn, cũng như có nhiều plugin hỗ trợ tối ưu hóa hiệu suất giúp bạn build production tối ưu nhất
Vite thì nhanh hơn trong quá trình dev, nhưng không phải lúc nào cũng nhanh hơn trong quá trình build production

Getting Started

Cài đặt Vite

```sh
npm init vite@latest
```

```sh
npm create vite@latest
```

Vite thực thi các nhiệm vụ của mình thông qua một quy trình gồm nhiều bước để cung cấp một môi trường phát triển nhanh và tối ưu hóa quá trình xây dựng ứng dụng. Dưới đây là các bước chính trong cách Vite thực thi:

Khởi tạo Dự án:

Khi bạn khởi tạo một dự án Vite mới, nó sẽ tạo ra một cấu trúc dự án với các thư mục và tệp tin cần thiết, bao gồm index.html, src (thư mục chứa mã nguồn), và các tệp cấu hình như vite.config.js.
Chạy Máy chủ Phát triển:

Khi bạn khởi chạy máy chủ phát triển bằng cách chạy lệnh vite hoặc npm run dev, Vite sẽ khởi động một máy chủ phát triển nhanh dựa trên ES module.
Máy chủ này sử dụng ES module trực tiếp từ trình duyệt, thay vì cần phải xây dựng lại toàn bộ dự án khi có sự thay đổi.
Hỗ trợ HMR (Hot Module Replacement):

Vite hỗ trợ HMR, cho phép các module được thay thế tại chỗ mà không cần làm mới toàn bộ trang. Điều này làm tăng tốc quá trình phát triển bằng cách giảm thời gian tải lại trang và duy trì trạng thái ứng dụng.
Bộ Xử Lý Pre-Bundling:

Vite sử dụng esbuild cho quá trình pre-bundling để tăng tốc độ phân tích cú pháp và biên dịch các thư viện phụ thuộc.
Quá trình này giúp giảm số lượng yêu cầu HTTP và tăng tốc độ tải trang.
Chuyển đổi và Biên dịch Module:

Vite sử dụng các plugin để chuyển đổi và biên dịch các module khác nhau như TypeScript, JSX, CSS, và các tài nguyên khác.
Nó có sẵn các plugin tích hợp và cũng cho phép bạn thêm các plugin của riêng mình.
Tối ưu hóa và Xây dựng Sản phẩm:

Khi bạn sẵn sàng để xây dựng ứng dụng cho môi trường sản xuất, bạn có thể chạy lệnh vite build.
Vite sẽ sử dụng Rollup để tạo ra một bundle tối ưu cho ứng dụng, bao gồm cả việc chia nhỏ mã nguồn (code splitting) và tối ưu hóa các tài nguyên.
Cấu hình và Tùy chỉnh:

Vite cho phép bạn cấu hình các tùy chọn khác nhau thông qua tệp vite.config.js. Bạn có thể tùy chỉnh cách máy chủ phát triển hoạt động, cách các module được chuyển đổi, và cách quá trình xây dựng được thực hiện.
Vite được thiết kế để cung cấp một trải nghiệm phát triển nhanh chóng và mượt mà, đặc biệt là cho các ứng dụng Vue, React, và các framework hiện đại khác.

Sau khi bạn build ứng dụng của mình bằng npm run build, Vite sẽ thực sự xóa các thẻ scipt và tham chiếu tất cả code của chúng ta từ 1 package

Vite config

vite.config.ts: Đây là nơi chúng ta thêm các plugin và thực hiện tất cả các cấu hình của mình
// https://vitejs.dev/config/
async config

```sh
export default defineConfig(async ({ command, mode }) => {
  const data = await asyncFunction()
  return {
    // vite config
  }
})
```

```sh
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  if (command === 'serve') {
    return {
      // dev specific config
    }
  } else {
    // command === 'build'
    return {
      // build specific config
    }
  }
})
```

***HRM (Hot Module Replacement)***
HRM (Hot Module Replacement) là một tính năng mà Vite hỗ trợ, cho phép chúng ta cập nhật code mà không cần phải làm mới trang. Điều này giúp tăng tốc quá trình phát triển bằng cách giảm thời gian tải lại trang và duy trì trạng thái ứng dụng.
