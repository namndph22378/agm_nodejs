import axios from "axios";
import dotenv from 'dotenv'
dotenv.config()
export const getAll = async (req, res) => {
  try {
    const { data: users } = await axios.get(
    `${process.env.API_URI}`
    );
    if (users.length === 0) {
      res.send({
        messenger: "Danh sách sản phẩm trống",
      });
    }
    return res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ messenger: err });
  }
};

export const getDetail = async (req, res) => {
  try {
    const { data: user } = await axios.get(`${process.env.API_URI}/${req.params.id}`);
    if (!user) {
      res.send({
        messenger: "Không tìm thấy sản phẩm",
      });
    }
    return res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ messenger: err });
  }
};

export const create = async (req, res) => {
  try {
    const { data: user } = await axios.post(`${process.env.API_URI}`, req.body);
    if (!user) {
      res.send({
        messenger: "Thêm sản phẩm không thành công",
      });
    }
    return res.json(user);
  } catch (err) {
    res.status(500).json({ messenger: err });
  }
};

export const remove = async (req, res) => {
  try {
    await axios.delete(`${process.env.API_URI}/${req.params.id}`);
    return res.status(200).json({
      message: "Sản phẩm đã được xóa thành công",
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const update = async (req, res) => {
  try {
    const { data: user } = await axios.put(
      `${process.env.API_URI}/${req.params.id}`,
      req.body
    );
    if (!user) {
      res.send({
        messenger: "Update sản phẩm không thành công",
      });
    }
    return res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ messenger: err });
  }
};
export const update2 = async (req, res) => {
  try {
    const { data: user } = await axios.patch(
      `${process.env.API_URI}/${req.params.id}`,
      req.body
    );
    if (!user) {
      res.send({
        messenger: "Update sản phẩm không thành công",
      });
    }
    return res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ messenger: err });
  }
};