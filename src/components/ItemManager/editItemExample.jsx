import React, { useState } from 'react';

export function EditItemExample(props) {
    const [products, setProducts] = useState([
        { id: '001', title: '华为手机', category: '手机', price: 6000.00, store: 4000, updateTime: '2024-01-01' },
        { id: '002', title: '苹果手机', category: '手机', price: 8000.00, store: 4000, updateTime: '2024-01-01' },
        { id: '003', title: '小米手机', category: '手机', price: 6000.00, store: 4000, updateTime: '2024-01-01' },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);

    const openModal = (product) => {
        setCurrentProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentProduct(null);
    };

    const handleSave = (updatedProduct) => {
        setProducts(products.map(product => product.id === updatedProduct.id ? updatedProduct : product));
        closeModal();
    };

    return (
        <div>
            <h1>商品列表</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.title} - {product.category} - {product.price} - {product.store} - {product.updateTime}
                        <button onClick={() => openModal(product)}>编辑</button>
                    </li>
                ))}
            </ul>
            {isModalOpen && <EditModal product={currentProduct} onClose={closeModal} onSave={handleSave} />}
        </div>
    );
};

const EditModal = ({ product, onClose, onSave }) => {
    const [formData, setFormData] = useState({ ...product });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>编辑商品</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        标题:
                        <input type="text" name="title" value={formData.title} onChange={handleChange} />
                    </label>
                    <label>
                        类别:
                        <input type="text" name="category" value={formData.category} onChange={handleChange} />
                    </label>
                    <label>
                        价格:
                        <input type="number" name="price" value={formData.price} onChange={handleChange} />
                    </label>
                    <label>
                        库存:
                        <input type="number" name="store" value={formData.store} onChange={handleChange} />
                    </label>
                    <label>
                        更新时间:
                        <input type="date" name="updateTime" value={formData.updateTime} onChange={handleChange} />
                    </label>
                    <button type="submit">保存</button>
                    <button type="button" onClick={onClose}>取消</button>
                </form>
            </div>
        </div>
    );
};
