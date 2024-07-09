### V8-JavaScript-Engine

Trước tiên chúng ta sẽ cần tìm hiểu những khái niệm sau
Processors:Bộ xử lý.Bộ vi xử lý là một thiết bị điện tử có khả năng thực hiện các phép tính logic hoặc số học trên các dữ liệu. Bộ xử lý là một phần quan trọng của máy tính, nó thực hiện các phép tính logic, phép toán số học, và các phép toán khác dựa trên các hướng dẫn từ các chương trình máy tính.
Machine code: Mã máy, đây là ngôn ngữ mà bộ xử lý có thể hiểu được, mọi chương trình khi chạy trên máy tính đều được chuyển đổi thành mã máy, ngôn ngữ máy.
C++:Nodejs được viết bằng ngôn ngữ lập trình C++ vì V8 engine cũng được viết bằng C++.
ECMAScript là tiêu chuẩn của JavaScript, ECMAScript 6 là phiên bản mới nhất của JavaScript.
JS Engine:JS Engine là một chương trình chạy trên máy tính, nó biên dịch mã JavaScript thành mã máy, ngôn ngữ mà bộ xử lý có thể hiểu được.

**_V8_**
V8 engine:V8 engine là một trình biên dịch JavaScript được phát triển bởi Google, được sử dụng trong trình duyệt Google Chrome và Nodejs. V8 engine biên dịch JavaScript thành mã máy, ngôn ngữ mà bộ xử lý có thể hiểu được.
V8 engine được viết bằng ngôn ngữ lập trình C++.
Là mã nguồn mở.
V8 có thể chạy độc lập, có thể nhúng vào các ứng dụng C++.

### The Node Core

Nodejs là 1 công nghệ Web Server, nó được thiết kế để người dùng có thể viết ứng dụng server-side bằng JavaScript.
Client-side: Là phần giao diện người dùng, chạy trên trình duyệt.
Server-side: Là phần xử lý dữ liệu, chạy trên server.
Giao tiếp giữa client-side và server-side thông qua HTTP.

**_JS cần gì để quản lí 1 Server?_**
Có những cách để tố chức code, mã code
Làm việc với các file, thư mục
Làm việc với dữ liệu
Làm việc với HTTP
Request-Response theo tiêu chuẩn
Thực hiện các tác vụ bất đồng bộ, xử lí những tác vụ mất thời gian
**_Module System_**
Module là 1 code block có thể được sử dụng lại, nó chứa các hàm, biến, class, object, ...
Tất cả ngôn ngữ lập trình đếu có nhưng JS trước đây thì không có, đây là 1 tính năng mới của ES6.
CommonJS Module là tieu chuẩn module của Nodejs.
Thực sự các nodejs module họat động như thế nào?
Module.exports: Dùng để export 1 module.
Require: Dùng để import 1 module.
Revealing Module Pattern: Dùng để ẩn các biến, hàm không cần thiết.
Mutate Module: Thay đổi module.

**_Function_**
Function là 1 khối code có thể được gọi lại, nó chứa các câu lệnh, biến, ...
Function có thể nhận tham số và trả về giá trị.
Function có thể được gọi bất kỳ lúc nào.
Function có thể được gán cho 1 biến.
Function có thể được truyền vào 1 function khác.
Function có thể trả về 1 function khác.
....

Fisrt-class function: Function trong JS là first-class function, nghĩa là function có thể được gán cho 1 biến, truyền vào 1 function khác, trả về 1 function khác.
Expression Function: Function được khai báo bằng biểu thức, không cần tên.
Arrow Function: Function được khai báo bằng dấu mũi tên =>, không cần từ khóa function, không cần từ khóa return, không cần dấu ngoặc nhọn.
Function Declaration: Khai báo function.
Invocation: Gọi function.
Function Constructor: Function được khai báo bằng từ khóa new.
IIFEs: Immediately Invoked Function Expression, function được gọi ngay sau khi khai báo.

**_Object_**
Là 1 tập hợp các cặp key-value.
Object là 1 tập hợp các thuộc tính và phương thức.
Object có thể chứa các object khác.
Object có thể chứa các function.
Object có thể chứa các biến.
Object có thể chứa các array.
Object có thể chứa các object.
....
Object Literal: Object được khai báo bằng cặp dấu ngoặc nhọn {}.
Object Constructor: Object được khai báo bằng từ khóa new.
So sánh 2 object: 2 object được so sánh bằng cách so sánh địa chỉ bộ nhớ, nếu 2 object có cùng địa chỉ bộ nhớ thì chúng là 1 object, ngược lại thì chúng là 2 object khác nhau.

**_JSON_**
Là viết tắt của JavaScript Object Notation.
Là 1 dạng dữ liệu, dùng để truyền dữ liệu giữa client và server.

### Event and Event Emitter

Event in NodeJS: Là 1 hành động nào đó, ví dụ như click, hover, submit, ... có thể xảy ra trên nhiều ứng dụng, nền tảng có ảnh hưởng đên ứng dụng của bạn.
Event Emitter: Là 1 đối tượng có khả năng phát ra event, lắng nghe event, xử lý event.
System Events: Là các event được phát ra bởi Nodejs, ví dụ như exit, beforeExit, uncaughtException, ...(C++ core libuv)
Custom Events: Là các event được phát ra bởi người dùng, ví dụ như click, hover, submit, ...(JS core)
Event Listener: Là 1 hàm được gọi khi event xảy ra.

### Asynchronous Programming , Event Loop, Streams, libuv

JS là ngôn ngữ lập trình bất đồng bộ, nghĩa là JS có khả năng thực hiện nhiều tác vụ cùng 1 lúc.
Synchronous Programming: Là chương trình thực hiện từ trên xuống dưới, từ trái qua phải, từ trong ra ngoài.
Asynchronous Programming: Là chương trình thực hiện nhiều tác vụ cùng 1 lúc, không cần chờ tác vụ trước hoàn thành.
Callback: Là 1 hàm được truyền vào 1 hàm khác, được gọi khi hàm khác thực hiện xong.
Callback Hell: Là tình trạng lồng nhiều callback vào nhau, khó hiểu, khó bảo trì.
Non-blocking: Là chương trình không bị block, không bị treo, không bị chờ đợi.

**_Libuv_**
Libuv là 1 thư viện C++, được sử dụng để xử lý các tác vụ bất đồng bộ, xử lý các tác vụ mất thời gian.
**_Event Loop_**
Event Loop là 1 vòng lặp, lắng nghe các event, xử lý các event, gọi các callback.
Event Loop chia ra làm 2 phần: Call Stack và Callback Queue.
Call Stack: Là 1 ngăn xếp, chứa các hàm, các biến, các câu lệnh, ...
Callback Queue: Là 1 hàng đợi, chứa các callback, các event, ...
Event Loop sẽ lắng nghe các event, xử lý các event, gọi các callback, ...
Event Loop sẽ lặp lại quá trình này mãi mãi, cho đến khi không còn event nào trong Callback Queue.
Microtask Queue: Là 1 hàng đợi, chứa các microtask, các promise, ...
Macrotask Queue: Là 1 hàng đợi, chứa các macrotask, các setTimeout, setInterval, ...

**_Buffer-Streams_**

Buffer là 1 nơi lưu trữ dữ liệu tạm thời, dữ liệu được lưu trữ dưới dạng binary và dữ liệu đó thường xuyên di chuyển từ 1 nơi này sang nơi khác.
Nó sẽ có 1 kích thước cố định, không thể thay đổi.

Streams là 1 cách xử lý dữ liệu, dữ liệu được xử lý từng phần, từng phần nhỏ.
Streams có thể đọc dữ liệu từ file, ghi dữ liệu vào file, ...
Streams có thể đọc dữ liệu từ 1 nguồn, ghi dữ liệu vào 1 đích.

Binary Data: Dữ liệu được lưu trữ dưới dạng binary, dữ liệu này không thể đọc được bằng mắt thường.
Character Set: Là 1 tập hợp các ký tự, bảng mã, ...
Encoding: Là quá trình chuyển đổi dữ liệu từ binary sang character set.

Pipe: Là 1 cách chuyển dữ liệu từ 1 streams này sang streams khác.

### HTTP

TCP/IP: Là 1 giao thức truyền thông, dùng để truyền dữ liệu giữa các máy tính.
HTTP: Là 1 giao thức truyền thông, dùng để truyền dữ liệu giữa client và server.

### NPM

Package: Là 1 thư viện, 1 module, 1 công cụ, ...
Node Package Manager: Là 1 công cụ quản lý các package, các module, các thư viện, ...install, uninstall, update, ...
NPM được cài đặt kèm với Nodejs.
Dependencies: Là các package, các module, các thư viện, ... mà ứng dụng của bạn cần.
Version: Là phiên bản của 1 package, 1 module, 1 thư viện, ...
Semantic Versioning: Là cách đánh version cho các package, các module, các thư viện, ...
Global Install: Là cài đặt 1 package, 1 module, 1 thư viện, ... toàn cục, có thể sử dụng ở bất kỳ đâu.
Using Other People's Code: Là sử dụng code của người khác, không cần phải viết lại code.

### Express

Express là 1 framework của Nodejs, dùng để xây dựng ứng dụng web, ứng dụng server-side.
Express là 1 framework mạnh mẽ, linh hoạt, dễ sử dụng.
Express có nhiều tính năng mạnh mẽ, như routing, middleware, ...

Environment: Là môi trường, cấu hình, ...
HTTP Method: Là phương thức HTTP, GET, POST, PUT, DELETE, ...
Routing: Là quá trình xác định xem request nào sẽ được xử lý bởi hàm nào.
Middleware: Là 1 hàm, 1 tập hợp các hàm, được thực thi trước khi request đến route handler.
Template Engine: Là 1 công cụ, 1 thư viện, dùng để render HTML, CSS, JS, ...
Query String: Là 1 chuỗi, dùng để truyền dữ liệu từ client lên server.
Post Parameters: Là 1 cách truyền dữ liệu từ client lên server, thông qua body của request.
RestFul API: Là 1 kiến trúc, 1 cách thiết kế API, dựa trên HTTP, dựa trên các phương thức HTTP.
JSON: Là 1 dạng dữ liệu, dùng để truyền dữ liệu giữa client và server.
