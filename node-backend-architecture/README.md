## MongoDB là gì?
- Là một CSDL no SQL linh hoạt, dữ liệu được lưu trữ dưới dạng JSON, dữ liệu được lưu trữ dưới dạng document.
## Khác biệt giữa MongoDB và SQL
- SQL: Dữ liệu được lưu trữ dưới dạng bảng, mỗi bảng sẽ chứa nhiều dòng, mỗi dòng sẽ chứa nhiều cột, mỗi cột sẽ chứa một kiểu dữ liệu.
- MongoDB: Dữ liệu được lưu trữ dưới dạng document, mỗi document sẽ chứa nhiều field, mỗi field sẽ chứa nhiều value, mỗi value sẽ chứa nhiều kiểu dữ liệu.
- MongoDB không cần phải định nghĩa schema trước, có thể thêm bất kỳ field nào vào document mà không cần phải thêm field đó vào schema.
## Database, Collection, Document
- Database: Là nơi chứa các collection, mỗi database sẽ chứa nhiều collection.
- Collection: Là nơi chứa các document, mỗi collection sẽ chứa nhiều document.
- Document: Là dữ liệu được lưu trữ dưới dạng JSON, mỗi document sẽ chứa nhiều field, mỗi field sẽ chứa nhiều value.
## Field, Value
- Field: Là tên của một trường dữ liệu, mỗi field sẽ chứa một value.
- Value: Là giá trị của một trường dữ liệu, mỗi value sẽ chứa một kiểu dữ liệu.
## Schema, Model
- Schema: Là cấu trúc của một document, mỗi schema sẽ chứa nhiều field, mỗi field sẽ chứa một kiểu dữ liệu.
- Model: Là một class được tạo ra từ schema, mỗi model sẽ chứa nhiều method để thao tác với document.
## JSON, BSON
- JSON: Là kiểu dữ liệu dạng text, dữ liệu được lưu trữ dưới dạng JSON sẽ chứa nhiều field, mỗi field sẽ chứa nhiều value.
- BSON: Là kiểu dữ liệu dạng binary, dữ liệu được lưu trữ dưới dạng BSON sẽ chứa nhiều field, mỗi field sẽ chứa nhiều value.

## MongoDB có khả năng xử lý dữ liệu lớn như thế nào so với các hệ thống quản lý cơ sở dữ liệu khác?

## MongoDB hỗ trợ những tính năng nổi bật nào giúp người dùng quản lý dữ liệu một cách hiệu quả?

## Làm thế nào để kết nối và thao tác với cơ sở dữ liệu MongoDB từ ứng dụng?

## Các thông số kết nối?

## CRUD
- Create: Tạo mới một document.
  - insertOne(data, options)
  - insertMany(data, options)
- Read: Đọc dữ liệu từ một document.
  - find(query, options)
  - findOne(query, options)
- Update: Cập nhật dữ liệu từ một document.
  - updateOne(query, data, options)
  - updateMany(query, data, options)
  - replaceOne(query, data, options)
- Delete: Xóa dữ liệu từ một document.
  - deleteOne(query, options)
  - deleteMany(query, options)

## Schema
- MongoDB không cần phải định nghĩa schema trước, có thể thêm bất kỳ field nào vào document mà không cần phải thêm field đó vào schema
- Schema là cấu trúc của một document, mỗi schema sẽ chứa nhiều field, mỗi field sẽ chứa một kiểu dữ liệu
- Thực tế là các ứng dụng cần sử dụng schema để đảm bảo dữ liệu được lưu trữ đúng cách, schema giúp cho việc đọc, ghi, cập nhật, xóa dữ liệu trở nên dễ dàng hơn (Map data)
## Data Types
- String: Là kiểu dữ liệu dạng text, mỗi field sẽ chứa một chuỗi ký tự.
- Number: Là kiểu dữ liệu dạng số, mỗi field sẽ chứa một số.
- Date: Là kiểu dữ liệu dạng ngày tháng, mỗi field sẽ chứa một ngày tháng.
- Boolean: Là kiểu dữ liệu dạng boolean, mỗi field sẽ chứa một giá trị true hoặc false.
- Object: Là kiểu dữ liệu dạng object, mỗi field sẽ chứa một object.
- Array: Là kiểu dữ liệu dạng mảng, mỗi field sẽ chứa một mảng.
- ObjectId: Là kiểu dữ liệu dạng ObjectId, mỗi field sẽ chứa một ObjectId.
## Validation
- Required: Bắt buộc phải có giá trị.
- Default: Giá trị mặc định.
- Enum: Giá trị phải nằm trong một danh sách.
- Min: Giá trị nhỏ nhất.
- Max: Giá trị lớn nhất.
- Match: Giá trị phải khớp với một biểu thức chính quy.

## Làm thế nào để cấu trúc được schema của MongoDB cho ứng dụng của chúng ta thực sự hiệu quả và có thể lưu được dữ liệu lớn?

- Câu trả lời nằm ở việc chúng ta cần phải hiểu rõ về dữ liệu của mình,dự án của mình, hiểu rõ về cách mà dữ liệu của mình sẽ được truy cập và sử dụng, hiểu rõ về cách mà dữ liệu của mình sẽ được cập nhật và xóa, hiểu rõ về cách mà dữ liệu của mình sẽ được tìm kiếm và sắp xếp.
- Một cái quan trọng nữa là việc CSDL của chúng ta đọc nhiều hơn ghi hay ghi nhiều hơn đọc :IoT(ghi nhiều hơn: mỗi tháng đọc 1 lần nhưng ghi mỗi giây), đọc ghi đồng thời hay phân tán (push vs pull).
- Dự đoán được hướng phát triển của DB của chúng ta trong tương lai, dự đoán được số lượng người dùng, số lượng dữ liệu, số lượng truy cập, số lượng cập nhật, số lượng xóa, số lượng tìm kiếm, số lượng sắp xếp.

## So sánh các thuật ngữ trong mysql và mongodb

## Relationships in MongoDB

- Relationships: Mối quan hệ giữa các document, mỗi document sẽ chứa một hoặc nhiều ObjectId của các document khác.
- Embedded là việc chúng ta nhúng 1 tài liệu vào 1 tài liệu khác, ưu điểm lad select 1 lần ra tất cả (Dữ liệu truy vấn sẽ bị chậm khi dữ liệu lớn).
- Reference là việc chúng ta lưu 1 ObjectId của 1 tài liệu vào 1 tài liệu khác, ưu điểm là update 1 lần cho nhiều tài liệu.

## One-to-One Relationships

VD: user có đang ngồi làm việc cho 1 công ty duy nhất

```js
// 1.Embedding
const user = {
  id: ObjectId("user_1"),
  name: "John Doe",
  company: {
    name: "ABC Company",
    address: "123 Main St",
    city: "Springfield",
    state: "IL",
    zip: "62701",
  },
};

// 2.Reference
const user = {
  id: ObjectId("user_1"),
  name: "John Doe",
  company: ObjectId("company"),
};

const company = {
  id: ObjectId("company"),
  name: "ABC Company",
  address: "123 Main St",
  city: "Springfield",
  state: "IL",
  zip: "62701",
};
```

## One-to-Few Relationships

VD: user có thể có nhiều địa chỉ

```js
// 1.Embedding
const user = {
  id: ObjectId("user"),
  name: "John Doe",
  addresses: [
    {
      street: "123 Main St",
      city: "Springfield",
      state: "IL",
      zip: "62701",
    },
    {
      street: "456 Elm St",
      city: "Springfield",
      state: "IL",
      zip: "62701",
    },
  ],
};

// 2.Reference
const user = {
  id: ObjectId("user"),
  name: "John Doe",
  addresses: [
    ObjectId("address1"),
    ObjectId("address2"),
  ],
};

const user1 = {
  id: ObjectId("user1"),
  name: "John Doe",
};

const address1 = {
  id: ObjectId("address1"),
  street: "123 Main St",
  city: "Springfield",
  state: "IL",
  zip: "62701",
  user: ObjectId("user1"),
};

const address2 = {
  id: ObjectId("address2"),
  street: "123 Main St",
  city: "Springfield",
  state: "IL",
  zip: "62701",
  user: ObjectId("user1"),
};
```

- Nhược điểm : Document không thể lớn quá 16MB, hiệu suất thêm sửa xóa cực kì chậm, phân trang kém(không thể lấy hết ra sau đó skip) ==> KHÔNG NÊN (phù hợp với sinh viên)

- Nhược điểm : Phải tốn nhiều truy vấn hơn, nếu có 100000 document thì việc phân trang nó cũng không hiệu quả(cam đoan với ae trong code đang dùng skip, limit), vì nó cũng sẽ request hết 100000 document về rồi mới phân trang kể cả việc mình có đánh index

- HANDLE : Bucket Pattern (Chia nhỏ dữ liệu ra để tránh việc lấy hết ra sau đó skip) ,chúng ta sẽ chia nhỏ dữ liệu ra thành các nhóm nhỏ, mỗi nhóm sẽ chứa 1 số lượng dữ liệu nhất định, khi cần phân trang chúng ta sẽ lấy ra nhóm đó và phân trang trong nhóm đó

## Bucket Pattern là gì?

## One-to-Huge Relationships

Cái này sẽ không nhúng thằng con vaofo thắng cha mà sẽ nhúng thằng cha vào thằng con

```js
const host = {
  id:ObjectId("host"),
  logs:[
    {
      id:ObjectId("log1"),
      message : "System is running low on memory",
      timestamp : "2020-08-24T12:34:56.789Z"
    },
    {
      id:ObjectId("log2"),
      message : "System is running low on disk space",
      timestamp : "2020-08-24T12:34:56.789Z"
    }
    ....
  ]
}


const host = {
  id:ObjectId("host"),
  logs:[
    ObjectId("log1"),
    ObjectId("log2")
  ]
}
```

Ví dụ 1 host có nhiều log, chúng ta không thể làm ntn đc vì khi dữ liệu nhiều thì document sẽ lớn và chậm và nó có thể đạt kích thước 16MB

Chúng ta sẽ làm như thế này:

```js
const host = {
  id: ObjectId("host"),
};

const log1 = {
  id: ObjectId("log1"),
  hostId: ObjectId("host"),
};

const log2 = {
  id: ObjectId("log2"),
  hostId: ObjectId("host"),
};

const log3 = {
  id: ObjectId("log3"),
  hostId: ObjectId("host"),
};
```

## Many-to-Many Relationships

VD: 1 user có nhiều task và 1 task có nhiều user

```js
const user1 = {
  id: ObjectId("user1"),
  name: "John Doe",
  tasks: [
    {
      id: ObjectId("task1"),
      name: "Task 1",
    },
    {
      id: ObjectId("task2"),
      name: "Task 2",
    },
  ],
};

const task1 = {
  id: ObjectId("task1"),
  name: "Task 1",
  users: [
    ObjectId("user1"),
    ObjectId("user2"),
  ],
};
```

## Lựa chọn giữa nhúng và tham chiếu
- Xem xét về mối quan hệ giữa các document, nếu mối quan hệ giữa các document là one-to-one hoặc one-to-few thì chúng ta nên sử dụng embedding, nếu mối quan hệ giữa các document là one-to-many hoặc many-to-many thì chúng ta nên sử dụng reference.
- Xác định kiểu truy cập dữ liệu, nếu dữ liệu được truy cập nhiều hơn được cập nhật thì chúng ta nên sử dụng embedding, nếu dữ liệu được cập nhật nhiều hơn được truy cập thì chúng ta nên sử dụng reference.
- Luôn ưu tiên việc nhúng dữ liệu vào document trước khi sử dụng reference.


## Các mô hình triển khai MongoDB

## 1. Standalone

Chỉ có 1 máy chủ duy nhất, hoặc 1 server duy nhất được cài MongoDB, tất cả ứng dụng của chúng ta đọc ghi đều trên 1 cơ sở dữ liệu duy nhất.

- **Ưu điểm**:
  - Dễ cài đặt, triển khai chỉ với một vài câu lệnh.
- **Nhược điểm**:
  - Không có khả năng mở rộng.
  - Không có khả năng chịu lỗi.
  - Không có khả năng backup (Liên quan đến tính sẵn sàng - Downtime là cook).
  - Yêu cầu phải có một server mạnh mẽ, cần phải biết tối ưu hiệu năng.

## 2. Replica Set

Một tập hợp các máy chủ, mỗi máy chủ sẽ chứa một bản sao của dữ liệu (Mỗi máy chủ cài một MongoDB). Một máy chủ sẽ là primary (chịu trách nhiệm đọc ghi), các máy chủ còn lại sẽ là secondary (update dữ liệu từ primary). Khi primary bị lỗi thì một secondary sẽ được chọn làm primary.

- **Ưu điểm**:
  - Có khả năng mở rộng.
  - Có khả năng chịu lỗi.
  - Có khả năng backup.
  - Ứng dụng của chúng ta sẽ không bị gián đoạn.
- **Nhược điểm**:
  - Khó cài đặt, triển khai, cần phải cấu hình nhiều.
  - Khó mở rộng theo chiều ngang. Nếu mở rộng theo chiều dọc thì cần phải thêm RAM, CPU.

## 3. Sharded Cluster

Một tập hợp các replica set, mỗi replica set sẽ chứa một bản sao của dữ liệu, mỗi replica set sẽ chứa một phần dữ liệu. Một máy chủ sẽ là router, router sẽ chịu trách nhiệm phân phối dữ liệu cho các replica set.

- **Ưu điểm**:
  - Có khả năng mở rộng.
  - Có khả năng chịu lỗi.
  - Có khả năng backup.
  - Có khả năng mở rộng theo chiều ngang.
  - Trong quá trình phát triển nếu gặp các vấn đề về hiệu năng có thể thêm các máy chủ.
- **Nhược điểm**:
  - Khó cài đặt, triển khai, cần phải cấu hình rất nhiều.

## Triển khai

- 1.On-premise(Standalone): Cài đặt trên máy chủ của chúng ta, tải mongo compas, tải mongo shell, cài đặt mongo server
- 2.Cloud: Có thể sử dụng các dịch vụ của các công ty lớn như AWS, Azure, Google Cloud, IBM Cloud, Digital Ocean, Linode, Vultr, Heroku, Firebase, MongoDB Atlas.MongoDB Atlas cung cấp sẵn cho chúng ta 1 con DB trên Cloud(512MB), mô hình Replica Set 1 chính 2 phụ

## Design Pattern

- 12 DESIGN PATTERN: Chúng ta chỉ cần nắm rõ khi nào sử dụng cái nào thôi

## Indexing
- Indexing: Là quá trình tạo ra một cấu trúc dữ liệu giúp cho việc tìm kiếm, sắp xếp, phân trang trở nên nhanh hơn.
- Nếu chúng ta không tạo index thì MongoDB sẽ phải quét toàn bộ document để tìm kiếm, sắp xếp, phân trang.
- Nếu chúng ta tạo index thì MongoDB sẽ sử dụng index để tìm kiếm, sắp xếp, phân trang.
- Index tồn tại bổ sung cho mỗi collection, về cơ bản là 1 danh sách có thứ tự của các giá trị
- Đừng tạo index quá nhiều, vì nó sẽ làm giảm hiệu suất ghi, lí do là vì khi chúng ta ghi dữ liệu thì MongoDB sẽ phải cập nhật index.
- Nếu collection của chúng ta có ít dữ liệu thì không cần tạo index, vì việc tìm kiếm, sắp xếp, phân trang không mất nhiều thời gian.
- Nếu hiệu suất đọc dữ liệu của chúng ta chậm thì cần tạo index, hiệu suất ghi dữ liệu chậm thì không cần tạo index.
- Đánh index cho các filed thực sự có ý nghĩa

## Các loại index
- Single Field Index: Index cho một field.
- Compound Index: Index cho nhiều field.
- Multikey Index: Index cho một field là một mảng.
- Text Index: Index cho một field là một chuỗi ký tự.
- Hashed Index: Index cho một field là một chuỗi ký tự, số.
- Geospatial Index: Index cho một field là một tọa độ.
- 2dsphere Index: Index cho một field là một tọa độ trên một hình cầu.
- 2d Index: Index cho một field là một tọa độ trên một hình phẳng.


## Các vấn đề về hiệu năng

## Các vấn đề về bảo mật

## Transactions
- Transactions: Là quá trình thực hiện một chuỗi các thao tác đọc, ghi, cập nhật, xóa dữ liệu mà nếu một thao tác thất bại thì tất cả các thao tác khác cũng sẽ thất bại.
- Transactions giúp cho việc đảm bảo tính toàn vẹn của dữ liệu, đảm bảo tính nhất quán của dữ liệu.
- Transactions MongoDB chỉ hỗ trợ cho replica set, không hỗ trợ cho standalone, sharded cluster.
- Transactions MongoDB làm việc như thế nào:
  - Bắt đầu một transaction.
  - Thực hiện các thao tác đọc, ghi, cập nhật, xóa dữ liệu.
  - Kết thúc một transaction.
  - Nếu một thao tác thất bại thì rollback tất cả các thao tác khác.
  - Nếu tất cả các thao tác đều thành công thì commit tất cả các thao tác.
## Stitch
- Stitch: Là một dịch vụ của MongoDB giúp cho việc phát triển ứng dụng trở nên dễ dàng hơn.
- Stitch giúp cho việc xây dựng ứng dụng trở nên nhanh hơn, dễ dàng hơn, linh hoạt hơn.
