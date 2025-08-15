const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/hello/:name', (req, res) => {
  res.send(`hello ${req.params.name}`);
})

app.get('/hello/:name/:age', (req, res) => {
  const name = req.params.name;
  const age = req.params.age;
  res.send(`name = ${name}, age = ${age}`);
})

app.post('/hello', (req, res) => {
  res.send(req.body);
})

app.put('/myPut', (req, res) => {
  res.send(req.body);
});

app.put('/updateCustomer/:id', (req, res) => {
  const id = req.params.id;
  const data = req.body;

  // res.send(`id = ${id} data ${data.id}`);

  res.send({ id: id, data: data });
});

app.delete('/myDelete/:id', (req, res) => {
  res.send(`id = ${req.params.id}`);
});

app.get('/book/list', async (req, res) => {
  const data = await prisma.book.findMany();
  res.send({ data: data });
});


app.post('/book/create', async (req, res) => {
  const data = req.body;
  const result = await prisma.book.create({
    data: data
  });

  res.send({ result: result });

})

app.post('/book/createManual', async (req, res) => {
  const result = await prisma.book.create({
    data: {
      isbn: '1004',
      name: 'Flutter',
      price: 850
    }
  });
  res.send({ result: result });
});

app.put('/book/update/:id', async (req, res) => {
  try {
    await prisma.book.update({
      data: {
        isbn: '10022',
        name: 'test update',
        price: 900
      },
      where: {
        id: parseInt(req.params.id)
      }
    });

    res.send({ message: 'success' });

  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.delete('/book/remove/:id', async (req, res) => {
  try {
    await prisma.book.delete({
      where: {
        id: parseInt(req.params.id)
      }
    });

    res.send({ message: 'success' });
  } catch (e) {
    res.status(500).send({ error: e.message })
  }
});

app.post('/book/search', async (req, res) => {
  try {
    const keyword = req.body.keyword;
    const data = await prisma.book.findMany({
      where: {
        name: {
          contains: keyword
        }
      }
    });

    res.send({ results: data });
  } catch (e) {
    res.status(500).send({ error: e.message });

  }
});

app.post('/book/startsWith', async (req, res) => {
  try {
    const keyword = req.body.keyword;
    const data = await prisma.book.findMany({
      where: {
        name: {
          startsWith: keyword
        }
      }
    });

    res.send({ results: data });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
})

app.get('/book/orderBy', async (req, res) => {
  try {
    data = await prisma.book.findMany({
      orderBy: {
        price: 'desc'
      }
    });

    res.send({ results: data });
  } catch {
    res.status(500).send({ error: e.message });
  }
});


app.get('/book/gt', async (req, res) => {
  try {
    const data = await prisma.book.findMany({
      where: {
        price: {
          gt: 900
        }
      }

    });

    res.send({ results: data });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.get('/book/notNull', async (req, res) => {
  try {
    const data = await prisma.book.findMany({
      where: {
        detail: {
          not: null
        }
      }
    });

    res.send({ results: data });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.get('/book/isNull', async (req, res) => {
  try {
    const data = await prisma.book.findMany({
      where: {
        detail: null
      }
    });

    res.send({ results: data });
  }
  catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.get('/book/between', async (req, res) => {
  try {
    const data = await prisma.book.findMany({
      where: {
        AND: [{
          price: {
            gte: 900 // >= 900
          }
        },
        {
          price: {
            lte: 1500 // <= 1500
          }
        }]
      }
    });

    res.send({ results: data });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.get('/book/sum', async (req, res) => {
  try {
    const data = await prisma.book.aggregate({
      _sum: {
        price: true
      }
    });

    res.send({ results: data });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.get('/book/findYearMonthDay', async (req, res) => {
  try {
    const data = await prisma.book.findMany({
      where: {
        registerDate: new Date('2024-05-09')
      }
    });

    res.send({ results: data });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.get('/book/findYearMonth', async (req, res) => {
  try {
    const data = await prisma.book.findMany({
      where: {
        registerDate: {
          gte: new Date('2024-05-01'),
          lte: new Date('2024-05-31')
        }
      }
    });

    res.send({ results: data });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

// app.get('/book/findYearMonth', async (req, res) => {
//   try {
//     const data = await prisma.book.findMany({
//       where: {
//         registerDate: {
//           gte: new Date('2024-05-01'),
//           lte: new Date('2024-05-31')
//         }
//       }
//     });

//     res.send({ results: data });
//   } catch (e) {
//     res.status(500).send({ error: e.message });
//   }
// });

app.get('/user/createToken', (req, res) => {
  try {
    const secret = process.env.TOKEN_SECRET;
    const payload = {
      id: 100,
      name: 'kob',
      level: 'admin'
    }
    const token = jwt.sign(payload, secret, { expiresIn: '1d' });

    res.send({ token: token });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.get('/user/verifyToken', (req, res) => {
  try {
    const secret = process.env.TOKEN_SECRET;
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwLCJuYW1lIjoia29iIiwibGV2ZWwiOiJhZG1pbiIsImlhdCI6MTc1NTI2NDIyNiwiZXhwIjoxNzU1MzUwNjI2fQ.G41awKjutMxBTFWzZDUXP_AAlukh1aeHnnOYY8kyzJI';
    const result = jwt.verify(token, secret);

    res.send({ result: result });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.listen(3000, 'localhost', () => {
  console.log('Server is running at http://localhost:3000');
});
