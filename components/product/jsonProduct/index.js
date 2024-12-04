import React, { useState } from "react";
import data from "@/data/Product.json";

export default function ProductCRUD() {
  const [products, setProducts] = useState(data.data); // 初始化產品資料
  const [newProduct, setNewProduct] = useState({
    ID: "",
    Name: "",
    OriginPrice: "",
    SalePrice: "",
    Stock: "",
  });

  const [editProduct, setEditProduct] = useState(null);

  // 新增產品
  const handleAddProduct = () => {
    setProducts([...products, { ...newProduct, ID: Date.now().toString() }]);
    setNewProduct({
      ID: "",
      Name: "",
      OriginPrice: "",
      SalePrice: "",
      Stock: "",
    });
  };

  // 編輯產品
  const handleEditProduct = (id) => {
    const productToEdit = products.find((product) => product.ID === id);
    setEditProduct(productToEdit);
  };

  const handleUpdateProduct = () => {
    setProducts(
      products.map((product) =>
        product.ID === editProduct.ID ? editProduct : product
      )
    );
    setEditProduct(null);
  };

  // 刪除產品
  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.ID !== id));
  };

  return (
    <div>
      <h1>產品管理系統</h1>

      {/* 新增產品表單 */}
      <h2>新增產品</h2>
      <input
        type="text"
        placeholder="產品名稱"
        value={newProduct.Name}
        onChange={(e) => setNewProduct({ ...newProduct, Name: e.target.value })}
      />
      <input
        type="number"
        placeholder="原價"
        value={newProduct.OriginPrice}
        onChange={(e) =>
          setNewProduct({ ...newProduct, OriginPrice: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="特價"
        value={newProduct.SalePrice}
        onChange={(e) =>
          setNewProduct({ ...newProduct, SalePrice: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="庫存"
        value={newProduct.Stock}
        onChange={(e) =>
          setNewProduct({ ...newProduct, Stock: e.target.value })
        }
      />
      <button onClick={handleAddProduct}>新增產品</button>

      {/* 產品清單 */}
      <h2>產品清單</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>名稱</th>
            <th>原價</th>
            <th>特價</th>
            <th>庫存</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.ID}>
              <td>{product.ID}</td>
              <td>{product.Name}</td>
              <td>{product.OriginPrice}</td>
              <td>{product.SalePrice}</td>
              <td>{product.Stock}</td>
              <td>
                <button onClick={() => handleEditProduct(product.ID)}>編輯</button>
                <button onClick={() => handleDeleteProduct(product.ID)}>刪除</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 編輯產品表單 */}
      {editProduct && (
        <div>
          <h2>編輯產品</h2>
          <input
            type="text"
            value={editProduct.Name}
            onChange={(e) =>
              setEditProduct({ ...editProduct, Name: e.target.value })
            }
          />
          <input
            type="number"
            value={editProduct.OriginPrice}
            onChange={(e) =>
              setEditProduct({ ...editProduct, OriginPrice: e.target.value })
            }
          />
          <input
            type="number"
            value={editProduct.SalePrice}
            onChange={(e) =>
              setEditProduct({ ...editProduct, SalePrice: e.target.value })
            }
          />
          <input
            type="number"
            value={editProduct.Stock}
            onChange={(e) =>
              setEditProduct({ ...editProduct, Stock: e.target.value })
            }
          />
          <button onClick={handleUpdateProduct}>更新產品</button>
        </div>
      )}
    </div>
  );
}
