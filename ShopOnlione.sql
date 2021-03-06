USE [shoponline]
GO
/****** Object:  Table [dbo].[Bill]    Script Date: 10/16/2021 10:14:10 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Bill](
	[BillID] [int] IDENTITY(1,1) NOT NULL,
	[BuyDate] [datetime] NOT NULL,
	[Status] [int] NOT NULL,
	[TotalBill] [decimal](18, 0) NOT NULL,
	[CustomerID] [int] NOT NULL,
	[FullName] [nvarchar](50) NOT NULL,
	[Gender] [bit] NULL CONSTRAINT [DF_Bill_Gender]  DEFAULT ((1)),
	[Phone] [varchar](15) NOT NULL,
	[Email] [varchar](256) NOT NULL,
	[Address] [nvarchar](500) NOT NULL,
 CONSTRAINT [PK__Bill__11F2FC4ADA31385B] PRIMARY KEY CLUSTERED 
(
	[BillID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[BillDetail]    Script Date: 10/16/2021 10:14:11 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BillDetail](
	[BillDetailID] [int] IDENTITY(1,1) NOT NULL,
	[Amount] [int] NOT NULL,
	[PriceProduct] [decimal](18, 0) NOT NULL,
	[BillID] [int] NOT NULL,
	[ProductID] [int] NOT NULL,
 CONSTRAINT [PK__BillDeta__793CAF755281E5D3] PRIMARY KEY CLUSTERED 
(
	[BillDetailID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Comment]    Script Date: 10/16/2021 10:14:11 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Comment](
	[CommentID] [int] NOT NULL,
	[Content] [nvarchar](500) NULL,
	[Date] [date] NULL,
	[CustomerID] [int] NULL,
	[ProductID] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[CommentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Customer]    Script Date: 10/16/2021 10:14:11 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Customer](
	[CustomerID] [int] NOT NULL,
	[UserName] [varchar](50) NOT NULL,
	[PassWord] [varchar](50) NOT NULL,
	[FullName] [nvarchar](50) NOT NULL,
	[Gender] [bit] NOT NULL,
	[Address] [nvarchar](100) NOT NULL,
	[DateOfBirth] [date] NULL,
	[Phone] [int] NOT NULL,
	[Email] [nvarchar](256) NULL,
	[IsSupplier] [bit] NOT NULL,
	[SuppliersID] [int] NULL,
 CONSTRAINT [PK__Customer__A4AE64B88CA0C422] PRIMARY KEY CLUSTERED 
(
	[CustomerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Product]    Script Date: 10/16/2021 10:14:11 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Product](
	[ProductID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](1050) NOT NULL,
	[Amount] [int] NOT NULL,
	[Price] [decimal](18, 0) NOT NULL,
	[Images] [varchar](1000) NULL,
	[CategoryID] [int] NULL,
	[SupplierID] [int] NULL,
 CONSTRAINT [PK__Product__B40CC6ED7F098412] PRIMARY KEY CLUSTERED 
(
	[ProductID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[ProductCategory]    Script Date: 10/16/2021 10:14:11 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProductCategory](
	[CategoryID] [int] NOT NULL,
	[CategoryName] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[CategoryID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Supplier]    Script Date: 10/16/2021 10:14:11 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Supplier](
	[SupplierID] [int] NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Address] [nvarchar](100) NOT NULL,
	[Phone] [int] NOT NULL,
	[Description] [nvarchar](200) NULL,
	[TypeStoreID] [int] NOT NULL,
	[CustomerID] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[SupplierID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TypeStore]    Script Date: 10/16/2021 10:14:11 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TypeStore](
	[TypeStoreID] [int] NOT NULL,
	[TypeStoreName] [nvarchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[TypeStoreID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[Bill] ON 

GO
INSERT [dbo].[Bill] ([BillID], [BuyDate], [Status], [TotalBill], [CustomerID], [FullName], [Gender], [Phone], [Email], [Address]) VALUES (4, CAST(N'2018-11-24 15:07:02.960' AS DateTime), 0, CAST(66460000 AS Decimal(18, 0)), 0, N'Đình Phúc', 1, N'973642632', N'PhucND.zit@gmail.com', N'Ngõ 1 Phạm Văn Đồng Hà Nội')
GO
INSERT [dbo].[Bill] ([BillID], [BuyDate], [Status], [TotalBill], [CustomerID], [FullName], [Gender], [Phone], [Email], [Address]) VALUES (5, CAST(N'2018-11-24 15:08:24.817' AS DateTime), 0, CAST(66460000 AS Decimal(18, 0)), 0, N'Đình Phúc', 1, N'973642632', N'PhucND.zit@gmail.com', N'Ngõ 1 Phạm Văn Đồng Hà Nội')
GO
INSERT [dbo].[Bill] ([BillID], [BuyDate], [Status], [TotalBill], [CustomerID], [FullName], [Gender], [Phone], [Email], [Address]) VALUES (6, CAST(N'2018-11-24 15:08:39.437' AS DateTime), 0, CAST(66460000 AS Decimal(18, 0)), 0, N'Đình Phúc', 1, N'973642632', N'PhucND.zit@gmail.com', N'Ngõ 1 Phạm Văn Đồng Hà Nội')
GO
INSERT [dbo].[Bill] ([BillID], [BuyDate], [Status], [TotalBill], [CustomerID], [FullName], [Gender], [Phone], [Email], [Address]) VALUES (7, CAST(N'2018-11-24 15:09:49.220' AS DateTime), 0, CAST(66460000 AS Decimal(18, 0)), 0, N'Đình Phúc', 1, N'973642632', N'PhucND.zit@gmail.com', N'Ngõ 1 Phạm Văn Đồng Hà Nội')
GO
INSERT [dbo].[Bill] ([BillID], [BuyDate], [Status], [TotalBill], [CustomerID], [FullName], [Gender], [Phone], [Email], [Address]) VALUES (9, CAST(N'2018-11-25 14:43:18.690' AS DateTime), 0, CAST(66470000 AS Decimal(18, 0)), 0, N'Đình Phúc', 1, N'973642632', N'PhucND.zit@gmail.com', N'Ngõ 1 Phạm Văn Đồng Hà Nội')
GO
INSERT [dbo].[Bill] ([BillID], [BuyDate], [Status], [TotalBill], [CustomerID], [FullName], [Gender], [Phone], [Email], [Address]) VALUES (14, CAST(N'2018-11-26 08:46:41.880' AS DateTime), 0, CAST(132450000 AS Decimal(18, 0)), 0, N'Đình Phúc', 1, N'973642632', N'PhucND.zit@gmail.com', N'Ngõ 1 Phạm Văn Đồng Hà Nội')
GO
INSERT [dbo].[Bill] ([BillID], [BuyDate], [Status], [TotalBill], [CustomerID], [FullName], [Gender], [Phone], [Email], [Address]) VALUES (15, CAST(N'2018-11-26 08:51:21.727' AS DateTime), 0, CAST(54950000 AS Decimal(18, 0)), 0, N'Đình Phúc', 1, N'973642632', N'PhucND.zit@gmail.com', N'Ngõ 1 Phạm Văn Đồng Hà Nội')
GO
INSERT [dbo].[Bill] ([BillID], [BuyDate], [Status], [TotalBill], [CustomerID], [FullName], [Gender], [Phone], [Email], [Address]) VALUES (16, CAST(N'2018-11-26 09:04:45.670' AS DateTime), 0, CAST(12490000 AS Decimal(18, 0)), 0, N'Đình Phúc', 1, N'973642632', N'PhucND.zit@gmail.com', N'Ngõ 1 Phạm Văn Đồng Hà Nội')
GO
INSERT [dbo].[Bill] ([BillID], [BuyDate], [Status], [TotalBill], [CustomerID], [FullName], [Gender], [Phone], [Email], [Address]) VALUES (17, CAST(N'2018-12-09 09:19:51.287' AS DateTime), 0, CAST(27680000 AS Decimal(18, 0)), 0, N'Đình Phúc', 1, N'973642632', N'PhucND.zit@gmail.com', N'Ngõ 1 Phạm Văn Đồng Hà Nội')
GO
INSERT [dbo].[Bill] ([BillID], [BuyDate], [Status], [TotalBill], [CustomerID], [FullName], [Gender], [Phone], [Email], [Address]) VALUES (18, CAST(N'2018-12-09 15:32:51.330' AS DateTime), 0, CAST(20990000 AS Decimal(18, 0)), 0, N'Đình Phúc', 1, N'0973642632', N'PhucND.zit@gmail.com', N'Ngõ 1 Phạm Văn Đồng Hà Nội')
GO
INSERT [dbo].[Bill] ([BillID], [BuyDate], [Status], [TotalBill], [CustomerID], [FullName], [Gender], [Phone], [Email], [Address]) VALUES (19, CAST(N'2021-10-15 14:08:32.420' AS DateTime), 0, CAST(62970000 AS Decimal(18, 0)), 0, N'Lê Võ Hồng Ngọc', 1, N'+84944922247', N'ngoclvh.bh.dl@gmail.com', N'83/6 Tô Ký - Tổ 7 - Khu Phố 2 - Phường Tân Chánh Hiên - Quận 12 - Tp Hcm')
GO
SET IDENTITY_INSERT [dbo].[Bill] OFF
GO
SET IDENTITY_INSERT [dbo].[BillDetail] ON 

GO
INSERT [dbo].[BillDetail] ([BillDetailID], [Amount], [PriceProduct], [BillID], [ProductID]) VALUES (4, 1, CAST(20990000 AS Decimal(18, 0)), 4, 3)
GO
INSERT [dbo].[BillDetail] ([BillDetailID], [Amount], [PriceProduct], [BillID], [ProductID]) VALUES (5, 1, CAST(6690000 AS Decimal(18, 0)), 4, 4)
GO
INSERT [dbo].[BillDetail] ([BillDetailID], [Amount], [PriceProduct], [BillID], [ProductID]) VALUES (6, 1, CAST(20990000 AS Decimal(18, 0)), 5, 3)
GO
INSERT [dbo].[BillDetail] ([BillDetailID], [Amount], [PriceProduct], [BillID], [ProductID]) VALUES (7, 1, CAST(6690000 AS Decimal(18, 0)), 5, 4)
GO
INSERT [dbo].[BillDetail] ([BillDetailID], [Amount], [PriceProduct], [BillID], [ProductID]) VALUES (8, 1, CAST(20990000 AS Decimal(18, 0)), 6, 3)
GO
INSERT [dbo].[BillDetail] ([BillDetailID], [Amount], [PriceProduct], [BillID], [ProductID]) VALUES (9, 1, CAST(6690000 AS Decimal(18, 0)), 6, 4)
GO
INSERT [dbo].[BillDetail] ([BillDetailID], [Amount], [PriceProduct], [BillID], [ProductID]) VALUES (10, 1, CAST(20990000 AS Decimal(18, 0)), 7, 3)
GO
INSERT [dbo].[BillDetail] ([BillDetailID], [Amount], [PriceProduct], [BillID], [ProductID]) VALUES (11, 1, CAST(6690000 AS Decimal(18, 0)), 7, 4)
GO
INSERT [dbo].[BillDetail] ([BillDetailID], [Amount], [PriceProduct], [BillID], [ProductID]) VALUES (17, 1, CAST(32990000 AS Decimal(18, 0)), 9, 2)
GO
INSERT [dbo].[BillDetail] ([BillDetailID], [Amount], [PriceProduct], [BillID], [ProductID]) VALUES (18, 1, CAST(12490000 AS Decimal(18, 0)), 9, 1)
GO
INSERT [dbo].[BillDetail] ([BillDetailID], [Amount], [PriceProduct], [BillID], [ProductID]) VALUES (19, 1, CAST(20990000 AS Decimal(18, 0)), 9, 3)
GO
INSERT [dbo].[BillDetail] ([BillDetailID], [Amount], [PriceProduct], [BillID], [ProductID]) VALUES (27, 1, CAST(12490000 AS Decimal(18, 0)), 14, 1)
GO
INSERT [dbo].[BillDetail] ([BillDetailID], [Amount], [PriceProduct], [BillID], [ProductID]) VALUES (28, 3, CAST(32990000 AS Decimal(18, 0)), 14, 2)
GO
INSERT [dbo].[BillDetail] ([BillDetailID], [Amount], [PriceProduct], [BillID], [ProductID]) VALUES (29, 1, CAST(20990000 AS Decimal(18, 0)), 14, 3)
GO
INSERT [dbo].[BillDetail] ([BillDetailID], [Amount], [PriceProduct], [BillID], [ProductID]) VALUES (30, 5, CAST(10990000 AS Decimal(18, 0)), 15, 5)
GO
INSERT [dbo].[BillDetail] ([BillDetailID], [Amount], [PriceProduct], [BillID], [ProductID]) VALUES (31, 1, CAST(12490000 AS Decimal(18, 0)), 16, 1)
GO
INSERT [dbo].[BillDetail] ([BillDetailID], [Amount], [PriceProduct], [BillID], [ProductID]) VALUES (32, 1, CAST(6690000 AS Decimal(18, 0)), 17, 4)
GO
INSERT [dbo].[BillDetail] ([BillDetailID], [Amount], [PriceProduct], [BillID], [ProductID]) VALUES (33, 1, CAST(20990000 AS Decimal(18, 0)), 17, 3)
GO
INSERT [dbo].[BillDetail] ([BillDetailID], [Amount], [PriceProduct], [BillID], [ProductID]) VALUES (34, 1, CAST(20990000 AS Decimal(18, 0)), 18, 3)
GO
INSERT [dbo].[BillDetail] ([BillDetailID], [Amount], [PriceProduct], [BillID], [ProductID]) VALUES (35, 3, CAST(20990000 AS Decimal(18, 0)), 19, 3)
GO
SET IDENTITY_INSERT [dbo].[BillDetail] OFF
GO
SET IDENTITY_INSERT [dbo].[Product] ON 

GO
INSERT [dbo].[Product] ([ProductID], [Name], [Amount], [Price], [Images], [CategoryID], [SupplierID]) VALUES (1, N'Samsung Galaxy A9', 58, CAST(12490000 AS Decimal(18, 0)), N'https://cdn.tgdd.vn/UserUpload/CampaignManager/20181115/galaxy-a9-1-dtb904e-640.png', NULL, NULL)
GO
INSERT [dbo].[Product] ([ProductID], [Name], [Amount], [Price], [Images], [CategoryID], [SupplierID]) VALUES (2, N'Điện thoại iPhone Xs Max 64GB', 152, CAST(32990000 AS Decimal(18, 0)), N'https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gray-400x460.png', NULL, NULL)
GO
INSERT [dbo].[Product] ([ProductID], [Name], [Amount], [Price], [Images], [CategoryID], [SupplierID]) VALUES (3, N'Điện thoại iPhone Xr 64GB', 15, CAST(20990000 AS Decimal(18, 0)), N'https://cdn.tgdd.vn/Products/Images/42/190325/iphone-xr-black-400x460.png', NULL, NULL)
GO
INSERT [dbo].[Product] ([ProductID], [Name], [Amount], [Price], [Images], [CategoryID], [SupplierID]) VALUES (4, N'Điện thoại Xiaomi Mi 8 Lite', 45, CAST(6690000 AS Decimal(18, 0)), N'https://cdn.tgdd.vn/Products/Images/42/192317/xiaomi-mi-8-lite-black-1-400x460.png', NULL, NULL)
GO
INSERT [dbo].[Product] ([ProductID], [Name], [Amount], [Price], [Images], [CategoryID], [SupplierID]) VALUES (5, N'Điện thoại iPhone 6s Plus 32GB', 21, CAST(10990000 AS Decimal(18, 0)), N'https://cdn.tgdd.vn/Products/Images/42/87846/iphone-6s-plus-32gb-400x450-400x450.png', NULL, NULL)
GO
INSERT [dbo].[Product] ([ProductID], [Name], [Amount], [Price], [Images], [CategoryID], [SupplierID]) VALUES (6, N'Điện thoại iPhone 8 Plus 256GB', 52, CAST(27790000 AS Decimal(18, 0)), N'https://cdn.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-red-400x460.png', NULL, NULL)
GO
INSERT [dbo].[Product] ([ProductID], [Name], [Amount], [Price], [Images], [CategoryID], [SupplierID]) VALUES (7, N'Điện thoại OPPO Find X', 7, CAST(20990000 AS Decimal(18, 0)), N'https://cdn.tgdd.vn/Products/Images/42/165189/oppo-find-x-2-400x460-400x460.png', NULL, NULL)
GO
INSERT [dbo].[Product] ([ProductID], [Name], [Amount], [Price], [Images], [CategoryID], [SupplierID]) VALUES (8, N'Điện thoại Nokia 7 plus', 56, CAST(8290000 AS Decimal(18, 0)), N'https://cdn.tgdd.vn/Products/Images/42/153854/nokia-7-plus-5-400x460.png', NULL, NULL)
GO
INSERT [dbo].[Product] ([ProductID], [Name], [Amount], [Price], [Images], [CategoryID], [SupplierID]) VALUES (9, N'Điện thoại Huawei Mate 20 Pro
', 58, CAST(21990000 AS Decimal(18, 0)), N'https://cdn.tgdd.vn/Products/Images/42/188963/huawei-mate-20-pro-green-400x460.png', NULL, NULL)
GO
INSERT [dbo].[Product] ([ProductID], [Name], [Amount], [Price], [Images], [CategoryID], [SupplierID]) VALUES (10, N'Điện thoại Huawei Mate 20', 77, CAST(15990000 AS Decimal(18, 0)), N'https://cdn.tgdd.vn/Products/Images/42/179736/huawei-mate-20-black-400x460.png', NULL, NULL)
GO
INSERT [dbo].[Product] ([ProductID], [Name], [Amount], [Price], [Images], [CategoryID], [SupplierID]) VALUES (11, N'Điện thoại OPPO F9', 105, CAST(7600000 AS Decimal(18, 0)), N'/FileUploads/images/samsunggalaxys95_800x450_800x450.jpg', NULL, NULL)
GO
SET IDENTITY_INSERT [dbo].[Product] OFF
GO
ALTER TABLE [dbo].[Customer] ADD  CONSTRAINT [DF__Customer__Gender__1DE57479]  DEFAULT ((1)) FOR [Gender]
GO
ALTER TABLE [dbo].[Customer] ADD  CONSTRAINT [DF__Customer__DateOf__1ED998B2]  DEFAULT (getdate()) FOR [DateOfBirth]
GO
ALTER TABLE [dbo].[BillDetail]  WITH CHECK ADD  CONSTRAINT [FK__BillDetai__BillI__1FCDBCEB] FOREIGN KEY([BillID])
REFERENCES [dbo].[Bill] ([BillID])
GO
ALTER TABLE [dbo].[BillDetail] CHECK CONSTRAINT [FK__BillDetai__BillI__1FCDBCEB]
GO
ALTER TABLE [dbo].[BillDetail]  WITH CHECK ADD  CONSTRAINT [FK__BillDetai__Produ__20C1E124] FOREIGN KEY([ProductID])
REFERENCES [dbo].[Product] ([ProductID])
GO
ALTER TABLE [dbo].[BillDetail] CHECK CONSTRAINT [FK__BillDetai__Produ__20C1E124]
GO
ALTER TABLE [dbo].[Comment]  WITH CHECK ADD  CONSTRAINT [FK__Comment__Custome__21B6055D] FOREIGN KEY([CustomerID])
REFERENCES [dbo].[Customer] ([CustomerID])
GO
ALTER TABLE [dbo].[Comment] CHECK CONSTRAINT [FK__Comment__Custome__21B6055D]
GO
ALTER TABLE [dbo].[Comment]  WITH CHECK ADD  CONSTRAINT [FK__Comment__Product__22AA2996] FOREIGN KEY([ProductID])
REFERENCES [dbo].[Product] ([ProductID])
GO
ALTER TABLE [dbo].[Comment] CHECK CONSTRAINT [FK__Comment__Product__22AA2996]
GO
ALTER TABLE [dbo].[Product]  WITH CHECK ADD  CONSTRAINT [FK__Product__Categor__239E4DCF] FOREIGN KEY([CategoryID])
REFERENCES [dbo].[ProductCategory] ([CategoryID])
GO
ALTER TABLE [dbo].[Product] CHECK CONSTRAINT [FK__Product__Categor__239E4DCF]
GO
ALTER TABLE [dbo].[Product]  WITH CHECK ADD  CONSTRAINT [FK__Product__Supplie__24927208] FOREIGN KEY([SupplierID])
REFERENCES [dbo].[Supplier] ([SupplierID])
GO
ALTER TABLE [dbo].[Product] CHECK CONSTRAINT [FK__Product__Supplie__24927208]
GO
ALTER TABLE [dbo].[Supplier]  WITH CHECK ADD  CONSTRAINT [FK__Supplier__Custom__25869641] FOREIGN KEY([CustomerID])
REFERENCES [dbo].[Customer] ([CustomerID])
GO
ALTER TABLE [dbo].[Supplier] CHECK CONSTRAINT [FK__Supplier__Custom__25869641]
GO
ALTER TABLE [dbo].[Supplier]  WITH CHECK ADD FOREIGN KEY([TypeStoreID])
REFERENCES [dbo].[TypeStore] ([TypeStoreID])
GO
/****** Object:  StoredProcedure [dbo].[CreateBill]    Script Date: 10/16/2021 10:14:11 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROC [dbo].[CreateBill](
@CustomerID int,
@BuyDate DATETIME NULL,
@Status int ,
@TotalBill DECIMAL ,
@Phone VARCHAR(15) ,
@FullName  NVARCHAR(50),
@Gender bit,
@Email  NVARCHAR(256),
@Address  NVARCHAR(500)
)
AS
	INSERT INTO dbo.Bill
	        ( BuyDate ,
	          Status ,
	          TotalBill ,
	          CustomerID ,
	          FullName ,
	          Gender ,
	          Phone ,
	          Email ,
	          Address
	        )
	VALUES  ( @BuyDate , -- BuyDate - datetime
	          @Status , -- Status - int
	          @TotalBill , -- TotalBill - decimal
	          @CustomerID , -- CustomerID - int
	          @FullName , -- FullName - nvarchar(50)
	          @Gender , -- Gender - bit
	          @Phone , -- Phone - varchar(15)
	          @Email , -- Email - varchar(256)
	          @Address  -- Address - nvarchar(500)
	        )

GO
/****** Object:  StoredProcedure [dbo].[DelBill]    Script Date: 10/16/2021 10:14:11 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[DelBill](
@BillID INT
)AS
	DECLARE @CheckID INT
	SELECT  @CheckID = COUNT(*) FROM dbo.Bill WHERE BillID=@BillID
	IF(@CheckID=1)
	BEGIN
		DELETE dbo.BillDetail WHERE BillID=@BillID
		DELETE dbo.Bill WHERE BillID=@BillID
	End


GO
/****** Object:  StoredProcedure [dbo].[ins_BillDetail]    Script Date: 10/16/2021 10:14:11 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[ins_BillDetail](
	@BillID INT,
	@ProductID INT,
	@Amount int,
	@PriceProduct  DECIMAL
)
AS
	INSERT INTO dbo.BillDetail
	        ( Amount ,
	          PriceProduct ,
	          BillID ,
	          ProductID
	        )
	VALUES  ( @Amount , -- Amount - int
	          @PriceProduct , -- PriceProduct - DECIMAL
	          @BillID , -- BillID - int
	          @ProductID  -- ProductID - int
	        )

GO
/****** Object:  StoredProcedure [dbo].[Ins_product]    Script Date: 10/16/2021 10:14:11 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[Ins_product](
@ProductID INT,
@Name NVARCHAR(1050) ,
@Amount INT,
@Price DECIMAL ,
@Images VARCHAR(1000) ,
@CategoryID INT ,
@SupplierID INT 
)
AS 
 BEGIN
	DECLARE @CheckID INT
	SELECT  @CheckID = COUNT(*) FROM dbo.Product WHERE ProductID=@ProductID
	IF(@CheckID=0)
	 INSERT dbo.Product
	         ( Name ,
	           Amount ,
	           Price ,
	           Images ,
	           CategoryID ,
	           SupplierID
	         )
	 VALUES  ( @Name, -- Name - nvarchar(1050)
	           @Amount , -- Amount - int
	           @Price, -- Price - decimal
	           @Images , -- Images - varchar(1000)
	           @CategoryID , -- CategoryID - int
	           @SupplierID  -- SupplierID - int
	         )
 end


GO
/****** Object:  StoredProcedure [dbo].[Update_product]    Script Date: 10/16/2021 10:14:11 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[Update_product](
@ProductID INT,
@Name NVARCHAR(1050) ,
@Amount INT,
@Price DECIMAL ,
@Images VARCHAR(1000) ,
@CategoryID INT ,
@SupplierID INT 
)
AS 
 BEGIN
	DECLARE @CheckID INT
	SELECT  @CheckID = COUNT(*) FROM dbo.Product WHERE ProductID=@ProductID
	IF(@CheckID=1)
	  UPDATE dbo.Product SET Name=@Name,
	  Amount=@Amount,
	  Price=@Price,
	  Images=@Images,
	  CategoryID=@CategoryID,
	  SupplierID=SupplierID WHERE ProductID=@ProductID
 end


GO
