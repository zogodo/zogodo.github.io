# Raid6 和 Raid6 工作原理

## 异或算法

在讲 Raid 原理之前, 首先要了解一下异或算法

异或运算符: ⊕

a ⊕ b 的意思是将 a 和 b 按位比较, 相同得 0, 不同得1.

比如: 

| 变量  | 二进制值 |
| :---: | :------: |
|   a   |   0101   |
|   b   |   0110   |
| a ⊕ b |   0011   |

异或运算符合以下定律:

1. 归零律: a ⊕ a = 0
2. 恒等率: a ⊕ 0 = a
3. 交换律: a ⊕ b = b ⊕ b
4. 结合律: a ⊕ b ⊕ c = a ⊕ (b ⊕ c) = (a ⊕ b) ⊕ c
5. 自反律: a ⊕ b ⊕ a = b
6. 若: d = a ⊕ b ⊕ c 则: a = d ⊕ b ⊕ c



## Raid5

Raid5 也称 Raid-z1, 至少需要 3 块硬盘组成, 可以在任意丢失 1 块硬盘后还能还原出原始数据.

以下是由 3 块盘组成的 Raid5 工作原理:

1. 首先将文件分成大小相同得两个部分: A, B

2. 按以下方式存储到三块盘:

   | 盘1  | 盘2  |  盘3  |
   | :--: | :--: | :---: |
   |  A   |  B   | A ⊕ B |

3. 这样不管哪一块盘丢失了, 都能还原出原始数据 A, B

4. 比如盘2坏了, 此时丢失数据 B, 但是可以通过盘1和盘3计算出 B = A ⊕ (A ⊕ B)



## Raid6

Raid6 也称 Raid-z2, 至少需要 4 块硬盘组成, 可以在任意丢失 2 块硬盘后还能还原出原始数据.

以下是由 4 块盘组成的 Raid6 工作原理:

1. 首先将文件分成大小相同得三个部分: A, B, C

2. 按以下方式存储到三块盘:

   |    盘1    |    盘2    |    盘3    |    盘4    |
   | :-------: | :-------: | :-------: | :-------: |
   |     A     |     B     |     C     |     D     |
   | A ⊕ B ⊕ C | B ⊕ C ⊕ D | C ⊕ D ⊕ A | D ⊕ A ⊕ B |

3. 这样不管那两块盘丢失, 都能还原出原始数据 A, B, C

4. 比如盘2和盘3丢失, 此时丢失数据 B, C, 通过一下方法找回:

   - B⊕D = A ⊕ (D⊕A⊕B)    `利用盘1和盘4`
   - <b style="color:red">B</b> = (B⊕D) ⊕ D               `此时还原出B`
   - B⊕C = A ⊕ (A⊕B⊕C)     `利用盘1`
   - <b style="color:red">C</b> = (B⊕C) ⊕ B                `此时还原出C`
