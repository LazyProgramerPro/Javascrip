Performance là gì?
Chúng ta nhận biết 1 trang web có tốt không thông qua thời gian load trang, thời gian render trang, thời gian tương tác với trang. Tất cả những thời gian này đều được gọi là performance của trang web.
Những lợi ích của việc cải thiện performance:
- Tăng trải nghiệm người dùng và giữ chân họ lại với trang web
- Tăng tốc độ load trang, tốc độ tìm kiếm trên trang web
- Giảm chi phí vận hành
- Tăng tính cạnh tranh với các trang web khác
- Cải thiện SEO

Các thuật ngữ cơ bản:
Converation rate: tỷ lệ chuyển đổi, tỷ lệ người dùng thực hiện hành động mà bạn mong muốn trên trang web. Nếu bạn có 20 người truy cập mỗi tháng nhưng chỉ có 1 người mua hàng, tỷ lệ chuyển đổi của bạn là 5%.
Bounce rate: tỷ lệ thoát, tỷ lệ người dùng chỉ xem 1 trang và rời đi. Bounce rate càng thấp càng tốt.

***Tỉ lệ thoát trang web với thời gian tải trang***
Thời gian tăng lên, tỷ lệ thoát cũng tăng lên. Ví dụ: thời gian tải trang 1s, tỷ lệ thoát 5%, thời gian tải trang 3s, tỷ lệ thoát 10%, thời gian tải trang 6s, tỷ lệ thoát 20%.
Nếu thời gian tải tăng từ 1 lên 3s => Số lần thoát của người dùng tăng lên 32%, 1->5s là 90%, 1->10s là 123%.Những con số này cho thấy rằng việc tối ưu hóa thời gian tải trang là rất quan trọng.
Có thể là số tiền bạn kiếm được hoặc mất đi và load time cũng chỉ là 1 thước đo
***Web Vitals***
Web Vitals là một chuẩn đo lường hiệu suất trang web, được Google giới thiệu vào tháng 5 năm 2020. Web Vitals bao gồm vài chỉ số chính:
- LCP (Largest Contentful Paint): thời gian mà người dùng phải chờ đợi để xem phần nội dung lớn nhất trên trang web. Mục tiêu là dưới 2.5s.
- FID (First Input Delay): thời gian mà người dùng phải chờ đợi để tương tác với trang web. Mục tiêu là dưới 100ms.
- CLS (Cumulative Layout Shift): độ chính xác của trang web khi người dùng tương tác với trang web. Mục tiêu là dưới 0.1.
- INP: Số liệu đo lường thời điểm người dùng tương tác với trang web(mount click point). Mục tiêu là dưới 100ms.
- TTFB: Thời gian mà trình duyệt phải chờ đợi để nhận phản hồi từ máy chủ. Mục tiêu là dưới 600ms.
- TTI: Thời gian mà trình duyệt phải chờ đợi để trang web hoàn thành tải và sẵn sàng để tương tác. Mục tiêu là dưới 3.8s.

***Critical Resources***
Critical Resources là những tài nguyên cần thiết để hiển thị trang web. Điều này bao gồm CSS, JS, và HTML. Để tối ưu hóa trang web, bạn cần tối ưu hóa những tài nguyên này trước hết.Hãy tưởng tượng như bạn đang đọc 1 tờ báo, các tài nguyên quan trọng như tiêu đề, hình ảnh, và nội dung chính cần phải hiển thị trước. Còn những tài nguyên không quan trọng như quảng cáo, video, và các tài nguyên khác có thể được tải sau.
Bằng cách tập trung vào những tài nguyên thiết yếu này bạn có thể cải thiện đáng kể tốc độ load ban đầu của trang web.

***Chiến lược optimize JS***

UnifyJs,Terser: là công cụ giúp bạn tối ưu hóa tệp JS của bạn bằng cách loại bỏ các phần không cần thiết. Điều này giúp giảm kích thước của tệp JS, giảm thời gian tải trang.

Wepack, Rollup: là công cụ giúp bạn tối ưu hóa tệp JS của bạn bằng cách gộp nhiều tệp JS thành 1 tệp JS duy nhất. Điều này giúp giảm số lượng yêu cầu mạng cần thiết để tải trang, giảm thời gian tải trang.

Vite: là công cụ giúp bạn tối ưu hóa tệp JS của bạn bằng cách sử dụng ES Module. Điều này giúp giảm thời gian tải trang.

Gzip, Brotli: là công cụ giúp bạn tối ưu hóa tệp JS của bạn bằng cách nén tệp JS của bạn. Điều này giúp giảm kích thước của tệp JS, giảm thời gian tải trang.

Minification: là quá trình loại bỏ các ký tự không cần thiết như dấu cách, dấu xuống dòng, và các ký tự khác từ mã nguồn của bạn. Điều này giúp giảm kích thước của tệp JS, giảm thời gian tải trang
Compression: là quá trình nén tệp JS của bạn bằng cách sử dụng gzip hoặc Brotli. Điều này giúp giảm kích thước của tệp JS, giảm thời gian tải trang.

**Một điều rất tốt bạn có thể làm là giảm thiểu số lượng tệp JS bằng cách kết hợp chúng thành 1 tệp duy nhất(webpack). Tuy nhiên hãy cẩn trọng để không tạo ra các tệp quá lớn gây cản trở việc tăng hiệu suất của trang web.**

***ADAPT JAVASCRIPT FILES LOADING***
Có 1 số cách khác nhau để bạn tiếp cận và tải các tệp với JS
Async: Tệp JS sẽ được tải bất đồng bộ, không chờ đợi tệp JS tải xong mới tiếp tục tải trang.
Defer: Tệp JS sẽ được tải bất đồng bộ, nhưng sẽ chờ đợi tệp JS tải xong mới tiếp tục tải trang.
Khi các thuộc tính async và defer được sử dụng,chúng sẽ thay đổi hành vi của các tệp JS, tệp JS sẽ không chặn việc tải trang, giúp tăng tốc độ tải trang.
***Loops Ineraaction Optimization***
Bạn phải luôn giảm thiểu hoặc tối ưu hóa các vòng lặp trong JS của bạn, vì chúng có thể ảnh hưởng đến hiệu suất.
Sử dụng những vòng lặp chuyên biệt như forEach, map, filter, reduce thay vì sử dụng vòng lặp for.

*** DOM Manipulation Optimization***
Khi thay đổi DOM, trình duyệt phải render lại trang web. Điều này có thể ảnh hưởng đến hiệu suất của trang web. Bạn nên giảm thiểu việc thay đổi DOM của bạn để cải thiện hiệu suất của trang web.
Sử dụng innerHTML thay vì appendChild để thêm nội dung vào trang web.
Sử dụng DocumentFragment để thêm nhiều phần tử vào trang web.
Sử dụng requestAnimationFrame để thực hiện các thay đổi DOM.
***Event Delegation***
Event Delegation là một kỹ thuật giúp bạn giảm thiểu số lượng event listener trên trang web của bạn. Điều này giúp giảm tải cho trình duyệt và cải thiện hiệu suất của trang web.
Thay vì thêm event listener cho từng phần tử, bạn có thể thêm event listener cho phần tử cha và sử dụng event.target để xác định phần tử con mà bạn muốn thêm event listener.
***Memory Leaks***
Memory Leaks là một vấn đề phổ biến trong JS. Nó xảy ra khi bạn cấp phát bộ nhớ cho một biến nhưng không giải phóng bộ nhớ sau khi sử dụng xong. Điều này có thể dẫn đến việc trình duyệt sử dụng nhiều bộ nhớ hơn và giảm hiệu suất của trang web.
Để tránh Memory Leaks, bạn nên giải phóng bộ nhớ sau khi sử dụng xong. Bạn có thể sử dụng các công cụ như Chrome DevTools để phát hiện Memory Leaks và giải quyết chúng.
Tránh dùng timer, interval, event listener không cần thiết.

***Libraries and Frameworks***
Khi sử dụng các thư viện và framework, bạn cần chú ý đến hiệu suất của chúng. Một số thư viện và framework có thể ảnh hưởng đến hiệu suất của trang web của bạn.
Bạn nên chọn thư viện và framework nhẹ nhàng và tối ưu hóa để cải thiện hiệu suất của trang web.

***Lazy Loading***
Lazy Loading là một kỹ thuật giúp bạn tải các tài nguyên của trang web một cách lười biếng, một kĩ thuật trì hoãn việc tải các dữ liệu không quan trọng đến khi chúng cần thiết hoặc sắp hiển thị ra đối với người dùng
***Code Splitting***
Code Splitting là một kỹ thuật giúp bạn chia tệp JS của bạn thành nhiều tệp nhỏ hơn, giúp giảm thời gian tải trang và cải thiện hiệu suất của trang web.
***Prefetching***
Prefetching là một kỹ thuật giúp bạn tải các tài nguyên của trang web trước khi chúng cần thiết
***Preloading***
Preloading là một kỹ thuật giúp bạn tải các tài nguyên của trang web trước khi chúng cần thiết
***Service Workers***
Service Workers là một kỹ thuật giúp bạn tạo ra các dịch vụ nền cho trang web của bạn
***Web Workers***
Web Workers là một kỹ thuật giúp bạn tạo ra các worker độc lập cho trang web của bạn
***Caching***
Caching là một kỹ thuật giúp bạn lưu trữ các tài nguyên của trang web vào bộ nhớ đệm
***HTTP/2***
HTTP/2 là một phiên bản mới của giao thức HTTP
***HTTP/3***
HTTP/3 là một phiên bản mới của giao thức HTTP
***CDN***
CDN là một dịch vụ giúp bạn lưu trữ các tài nguyên của trang web trên nhiều máy chủ trên toàn thế giới

***Chiến lược optimize CSS***

Css minification: là quá trình loại bỏ các ký tự không cần thiết như dấu cách, dấu xuống dòng, và các ký tự khác từ mã nguồn của bạn. Điều này giúp giảm kích thước của tệp CSS, giảm thời gian tải trang.

Css compression: là quá trình nén tệp CSS của bạn bằng cách sử dụng gzip hoặc Brotli. Điều này giúp giảm kích thước của tệp CSS, giảm thời gian tải trang.

***Image Optimization***
Image Optimization là một kỹ thuật giúp bạn tối ưu hóa các hình ảnh của trang web
***Font Optimization***
Font Optimization là một kỹ thuật giúp bạn tối ưu hóa các font của trang web
***CSS Optimization***
CSS Optimization là một kỹ thuật giúp bạn tối ưu hóa các tệp CSS của trang web
***Critical CSS***
Critical CSS là một kỹ thuật giúp bạn tải các tệp CSS cần thiết cho trang web trước
***Inline CSS***
Inline CSS là một kỹ thuật giúp bạn nhúng CSS trực tiếp vào trang web
***CSS Preprocessing***
CSS Preprocessing là một kỹ thuật giúp bạn sử dụng các công cụ để tạo ra CSS hiệu quả hơn  
***Critical Path CSS***
Critical Path CSS là một kỹ thuật giúp bạn tải các tệp CSS cần thiết cho trang web trước
***CSS Frameworks***
CSS Frameworks là một bộ công cụ giúp bạn tạo ra các trang web nhanh chóng và dễ dàng
***CSS Reset***
CSS Reset là một kỹ thuật giúp bạn đặt lại các giá trị mặc định của CSS
***CSS Variables***
CSS Variables là một kỹ thuật giúp bạn tạo ra các biến CSS
***CSS Grid***
CSS Grid là một kỹ thuật giúp bạn tạo ra các lưới CSS
***CSS Flexbox***
CSS Flexbox là một kỹ thuật giúp bạn tạo ra các hộp linh hoạt
***CSS Animations***
CSS Animations là một kỹ thuật giúp bạn tạo ra các hiệu ứng CSS
https://www.projectwallace.com/
https://cssstats.com/
https://makersaid.com/tools/css-performance-testing/
https://webpack.js.org/plugins/mini-css-extract-plugin/
https://vitejs.dev/guide/features.html

***Chiến lược optimize Images***

Chat GPT

***Tips***

Minimize Iframes Number: Iframes là một phần của trang web mà bạn có thể nhúng trang web khác vào trang web của bạn. Tuy nhiên, Iframes có thể ảnh hưởng đến hiệu suất của trang web của bạn. Bạn nên giảm thiểu số lượng Iframes trên trang web của bạn để cải thiện hiệu suất của trang web.
Iframes là các request HTTP riêng biệt, iframe được request khi trang web được load

Use preload atritube link tag: Preload là một thuộc tính của thẻ link giúp bạn tải các tài nguyên của trang web trước khi chúng cần thiết. Bạn nên sử dụng preload để tải các tài nguyên của trang web trước khi chúng cần thiết để cải thiện hiệu suất của trang web.

Inline Critical CSS

Avoid Inline CSS: Làm cho tập HTML của bạn trở nên lớn hơn, tăng thời gian tải trang

Reduce Cookie Size: Cookie là một phần quan trọng của trang web, nhưng nếu bạn sử dụng quá nhiều cookie, chúng có thể ảnh hưởng đến hiệu suất của trang web của bạn. Bạn nên giảm kích thước của cookie để cải thiện hiệu suất của trang web(<4MB)

Page Size: Kích thước trang web của bạn càng lớn, thời gian tải trang càng lâu. Bạn nên giảm kích thước trang web của bạn để cải thiện hiệu suất của trang web (500KB)

Minimize HTTP Requests: Số lượng yêu cầu HTTP càng nhiều, thời gian tải trang càng lâu. Bạn nên giảm số lượng yêu cầu HTTP để cải thiện hiệu suất của trang web

Same application layer protocol: Sử dụng cùng một giao thức ở tất cả các lớp ứng dụng của bạn để cải thiện hiệu suất của trang web

Eliminate 404 Errors: 404 Errors là một phần của trang web mà bạn không muốn người dùng của bạn thấy. Bạn nên loại bỏ 404 Errors để cải thiện hiệu suất của trang web

Enable Compression: Compression là một kỹ thuật giúp bạn giảm kích thước của tệp CSS, JS, và HTML của bạn để cải thiện hiệu suất của trang web

HTTP Caching: Caching là một kỹ thuật giúp bạn lưu trữ các tài nguyên của trang web vào bộ nhớ đệm để cải thiện hiệu suất của trang web

https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
https://roadmap.sh/best-practices/frontend-performance
https://web.dev/articles/apply-instant-loading-with-prpl