const Data = require('../model/dataModel');

const addData = async (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ message: 'Please fill all fields' });
    }

    try {
        const data1 = new Data({
            title,
            description,
            user: req.user.userId 
        });

        await data1.save();
        return res.status(201).json({
            message: 'Data added successfully',
            data: data1
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const getData = async (req, res) => {
    try {
        const dataList = await Data.find({ user: req.user.userId });
        return res.status(200).json({
            message: 'Data fetched successfully',
            data: dataList
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const updateData = async (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ message: 'Please fill all fields' });
    }

    try {
        const updatedData = await Data.findByIdAndUpdate(
            req.params.id,
            { title, description },
            { new: true }
        );

        return res.status(200).json({
            message: 'Data updated successfully',
            data: updatedData
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const deleteData = async (req, res) => {
    try {
        const deletedData = await Data.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message: 'Data deleted successfully',
            data: deletedData
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

module.exports = {
    addData,
    getData,
    updateData,
    deleteData
};
