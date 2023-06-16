const PDFDocument = require('pdfkit');
const fs = require('fs');

// Создаем новый документ PDF
const doc = new PDFDocument({ margin: 50 });

// Устанавливаем шрифты для документа
doc.font('Helvetica-Bold');
doc.fontSize(15);

// Добавляем текст для заголовка
doc.text('Чек', {
  align: 'center',
});

// Добавляем текстовые блоки для информации о товарах и ценах
doc.moveDown();
doc.font('Helvetica');
doc.fontSize(12);
doc.text('Товар 1 - 100 рублей', { indent: 20 });
doc.text('Товар 2 - 200 рублей', { indent: 20 });
doc.text('Товар 3 - 300 рублей', { indent: 20 });

// Добавляем общую сумму
doc.moveDown();
doc.font('Helvetica-Bold');
doc.fontSize(14);
doc.text('Общая сумма: 600 рублей', { align: 'right' });

// Сохраняем документ в файл
doc.pipe(fs.createWriteStream('example.pdf'));
doc.end();