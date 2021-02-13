/*Code was written by group 12
    Nisrina Eka Salsabila   19104037 
    Ananda Aulia Rizky      19104053
    Fadlan Raka Satura      19104072
    
    IT Telkom Purwokerto
    2021
*/

//Deklarasi input dengan prompt
const prompt = require('prompt-sync')()

    //Deklarasi Array tanpa value
    var arrayPenum = []
    var penumpangNew = new Penumpang()

    //function Object Penumpang dengan constructor
    function Penumpang(noNik,nama,tglLahir,tglPesan,asal,tujuan,tmptDdk,kategori,total){
        this.noNik      = noNik``
        this.nama       = nama
        this.tglLahir   = tglLahir
        this.tglPesan   = tglPesan
        this.asal       = asal
        this.tujuan     = tujuan
        this.tmptDdk    = tmptDdk
        this.kategori   = kategori
        this.total      = total
    }
    //Deklarasi untuk pemesanan Tiket
    function pesanTiket(){
        console.log('__________________________________')
        console.log('----------- Pesan Tiket ----------')
        console.log('__________________________________')
        console.log()

        let noNik    = prompt('Masukkan No Nik Anda        :')
        let nama     = prompt('Masukkan Nama Anda          :')
        let tglLahir = prompt('Masukkan Tanggal Lahir Anda :')
        let tglPesan = prompt('Masukkan Tanggal Pesan Anda :')
            console.log()
            console.log('Silahkan Pilih')
            console.log('1. Bekasi')
            console.log('2. Yogyakarta')
            console.log('3. Purwokerto')
        let asal     = prompt('Masukkan Asal Anda : ')
            switch(asal){//percabangan
                case '1' :
                    asal = 'Bekasi'
                    break
                case '2' :
                    asal = 'Yogyakarta'
                    break
                case '3' :
                    asal = 'Purwokerto'
                    break
                default :
                    asal = 'Tidak Tersedia'
            }
            console.log()
            console.log('Silahkan Pilih')
            console.log('1. Bekasi')
            console.log('2. Yogyakarta')
            console.log('3. Purwokerto')
        let tujuan = prompt('Masukkan Tujuan Anda  : ')
            switch(tujuan){//percabangan
                case '1' :
                    tujuan = 'Bekasi'
                    break
                case '2' :
                    tujuan = 'Yogyakarta'
                    break
                case '3' :
                    tujuan = 'Purwokerto'
                    break
                default :
                    tujuan = 'Tidak Tersedia'
            }
            console.log()
            console.log('Silahkan Pilih')
            console.log('1. A (Depan)')
            console.log('2. B (Tengah)')
            console.log('3. C (Belakang)')
        let tmptDdk = prompt('Masukkan Posisi duduk : ')
        switch(tmptDdk){//percabangan
                case '1' :
                    tmptDdk = 'A (Depan)'
                    break
                case '2' :
                    tmptDdk = 'B (Tengah)'
                    break
                case '3' :
                    tmptDdk = 'C (Belakang)'
                    break
                default :
                    tmptDdk = 'Tidak Tersedia'
            }

        let penumpang = new Penumpang(noNik,nama,tglLahir,tglPesan,asal,tujuan,tmptDdk)
        //Input dengan push
        arrayPenum.push(penumpang)
        }

     //Deklarasi untuk Bayar Tiket
    function bayar(){
        var index    = prompt('Masukan No Penumpang      : ')
        let jmlPenum = prompt('Masukkan Jumlah Penumpang : ')
            console.log()
            console.log('-----Pilih Kategori-----')
            console.log('1. Ekonomi     :  Rp 80.000')
            console.log('2. Eksekutif   :  Rp 150.000')
            console.log('3. Bisnis      :  Rp 200.000')
            console.log('4. Pariswisata :  Rp 300.000') 
        let noKereta = prompt('Masukkan Pilihan : ')
        var namaKereta = null
            switch(noKereta){
                case '1':
                    namaKereta = 'Ekonomi'
                    total = jmlPenum * 80000
                    console.log('Kategori         : ', namaKereta)
                    console.log('Total Pembayaran : ', total)
                    console.log()
                    break
                case '2':
                    namaKereta = 'Eksekutif'
                    total = jmlPenum * 150000
                    console.log('Kategori         : ', namaKereta)
                    console.log('Total Pembayaran : ', total)
                    console.log()
                    break
                case '3':
                    namaKereta = 'Bisnis'
                    total = jmlPenum * 200000
                    console.log('Kategori         : ', namaKereta)
                    console.log('Total Pembayaran : ', total)
                    console.log()
                    break
                case '4':
                    namaKereta = 'Pariwisata'
                    total = jmlPenum * 300000
                    console.log('Kategori         : ', namaKereta)
                    console.log('Total Pembayaran : ', total)
                    console.log()
                    break
                default:
                    console.log('Pilihan Tidak Ditemukan')
                    console.log()
            }
            index = index-1
            Penumpang.prototype.ganti = function(){
                noNik = arrayPenum[index].noNik
                nama = arrayPenum[index].nama
                tglLahir = arrayPenum[index].tglLahir
                tglPesan = arrayPenum[index].tglPesan
                asal = arrayPenum[index].asal
                tujuan = arrayPenum[index].tujuan
                tmptDdk = arrayPenum[index].tmptDdk
                kategori = namaKereta
                total = total
                return {noNik,nama,tglLahir,tglPesan,asal,tujuan,tmptDdk,kategori,total}
            } 
            arrayPenum[index] = penumpangNew.ganti()
       }
     //Deklarasi untuk Edit Tiket
    function editTiket(){
        console.log('_________________________________')
        console.log('----------- Edit Data -----------')
        console.log('_________________________________')

        CarinoNik = prompt('Masukkan No Nik : ')
        var index = arrayPenum.findIndex(function(data){
            return data['noNik'] == CarinoNik;
        })

        //objek function properti
        Penumpang.prototype.edit = function(){
            nama     = prompt('Masukkan Nama          :')
            tglLahir = prompt('Masukkan Tanggal Lahir :')
            tglPesan = prompt('Masukkan Tanggal Pesan :')
                console.log('Silahkan Pilih')
                console.log('1. Bekasi')
                console.log('2. Yogyakarta')
                console.log('3. Purwokerto')
            asal     = prompt('Masukkan Pilihan       :')
                switch(asal){
                    case '1' :
                        asal = 'Bekasi'
                        break
                    case '2' :
                        asal = 'Yogyakarta'
                        break
                    case '3' :
                        asal = 'Purwokerto'
                        break
                    default :
                        asal = 'Tidak Tersedia'
                }
                console.log('Silahkan Pilih')
                console.log('1. Bekasi')
                console.log('2. Yogyakarta')
                console.log('3. Purwokerto')
            tujuan = prompt('Masukkan Pilihan       :')
                switch(tujuan){
                    case '1' :
                        tujuan = 'Bekasi'
                        break
                    case '2' :
                        tujuan = 'Yogyakarta'
                        break
                    case '3' :
                        tujuan = 'Purwokerto'
                        break
                    default :
                        tujuan = 'Tidak Tersedia'
                }
                console.log()
                console.log('Silahkan Pilih')
                console.log('1. A (Depan)')
                console.log('2. B (Tengah)')
                console.log('3. C (Belakang)')
            tmptDdk = prompt('Masukkan Posisi duduk : ')
            switch(tmptDdk){
                    case '1' :
                        tmptDdk = 'A (Depan)'
                        break
                    case '2' :
                        tmptDdk = 'B (Tengah)'
                        break
                    case '3' :
                        tmptDdk = 'C (Belakang)'
                        break
                    default :
                        tmptDdk = 'Tidak Tersedia'
                }

                return {noNik,nama,tglLahir,tglPesan,asal,tujuan,tmptDdk,kategori,total}
         }
        //Memanggil fungsi
        arrayPenum[index] = penumpangNew.edit()
    }
     //Deklarasi untuk Cetak Tiket
    function cetakTiket(){
            console.log('________________________________\n')
            console.log('           Cetak Tiket            ')
            console.log('__________________________________')
    let index = 1
        //Peulangan for each untuk mendapatkan nilai x
        for(let x in arrayPenum){
            console.log('__________________________________')
            console.log(`No Penumpang   : ${index}`)
            index++
            console.log(`No Nik         : ${arrayPenum[x].noNik}`)
            console.log(`Nama           : ${arrayPenum[x].nama}`)
            console.log(`Tanggal Lahir  : ${arrayPenum[x].tglLahir}`)
            console.log(`Tanggal Pesan  : ${arrayPenum[x].tglPesan}`)
            console.log(`Asal           : ${arrayPenum[x].asal}`)
            console.log(`Tujuan         : ${arrayPenum[x].tujuan}`)
            console.log(`Kategori       : ${arrayPenum[x].kategori}`)
            console.log(`Posisi Tempat  : ${arrayPenum[x].tmptDdk}`)
            console.log(`Total Bayar    : ${arrayPenum[x].total }`)
            console.log(`_________________________________`)
        }
    }
    //Menampilkan menu penilaian
    var pilihMenu = true
    //tampilan menu pemesanan tiket kereta
    while(pilihMenu){
        console.log()
        console.log('__________________________________')
        console.log('           Selamat Datang         ')
        console.log('     Aplikasi Pemesanan Tiket     ')
        console.log('             Kereta Api           ')
        console.log('__________________________________')
        console.log("1. Pesan Tiket")
        console.log("2. Bayar")
        console.log("3. Edit Tiket")
        console.log("4. Cetak Tiket")
        console.log("5. Keluar")

        var pilihan = prompt('Masukan pilihan\: ')
        switch(pilihan){//Percabangan
        case '1':
            pilihan = pesanTiket()
            break;
        case '2' :
            pilihan = bayar()
            break;
        case '3' :
            pilihan = editTiket()
            break;
        case '4' :
            pilihan = cetakTiket()
            break;
        case '5' :
            console.log('Terimakasih')
            pilihMenu = false
            break; 
        default:
            console.log("Pilihan tidak ditemukan")
        }
    } 