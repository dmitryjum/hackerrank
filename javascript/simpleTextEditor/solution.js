class TextEditor {
    constructor() {
        this.textString = ""
        this.versions = []
    }
    
    1(text) { // append text
        this.textString = `${this.textString}${text}`
        this.versions.push(this.textString)
    }
    
    2(charNum) { //delete text
        this.textString = this.textString.slice(0, -parseInt(charNum))
        this.versions.push(this.textString)
    }
    
    3(charNum) { //print character
        console.log(this.textString[parseInt(charNum)-1])
    }
    
    4() { //undo the last operation
        this.versions.pop()
        this.textString = this.versions.slice(-1)[0]
    }
}

function processData(input) {
    const editor = new TextEditor()
    input.split("\n").splice(1).forEach(line => {
        const [method, arg] = line.split(" ")
        editor[method](arg)
    })
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

1000
1 giihangdtzjavcaxnbtudpcnmzggbdabocpeplzercnctkcvhoujbrpbztjlpuymabumbppgrydkdzbadcsjdtpdftlusapza
3 6
4
1 fcsivbvhtzydbhhopdnlaisgqhlkizqhezglxocqgymjedw
2 24
3 10
3 11
1 bgqrvdnlmkjdbmishfpaazvujrkzctgfbizhhrrdgdtzxzysm
4
1 tixqvwpiufqrqhgldlpaizamxxuivbhlmubnqpalwdowlf
2 60
1 zsfbxajobmdztghgddnsmxfceaudttvjqqvehvpodkexaj
2 16
2 20
4
1 yqcpbiuggbcpohztsrdx
4
2 11
3 27
3 15
1 uzwawzavoeksdalsxtyovqucuhvgcuxgzgyqyonsktudnntsocamsivhumienopvxmwoaq
1 bniitwuu
4
1 njqbeuhqnepwbvdbklwkoszfezvzkwdsbaffdlzggju
3 63
1 jdfvfypuxwinxjtzxohamglzumnkmzuhlmmuvvqphgmsimgixolbqjrgs
1 ektedygevlklaesnjjimzwfpbzyyqemzouabajxkihcppwhixjwrcymewvnvbuztlyivilpdvzujitptyhacooow
4
1 brxtzbqlleegvcfkgvgrlmzhkexfjilkhxhcllmexmtzxvzfdewpizvimfbianvvkzqdfhvyhegdshcwkfns
4
2 102
4
4
4
1 hvotecmrzyeudqwzmtgsvvuuaartompcwwapdjgzcbbptqrqzacveyxbrxmitzjsaqc
2 26
4
1 gybofrhqqctpjytykqpnxcctxwivblxufkkzsggzdbialkikfbitt
2 19
2 5
4
2 136
1 wchntzghwnuvghwjnigkudavomdfxqkisrwcegmyueujhoqzmptvrcmwquvyhljdtevkukbqdrrtegg
2 137
4
3 32
3 43
4
3 7
1 qsjdtvtndnfhsgmjmvoqorgn
1 etjjzocbgpwusvygrgikcnancpckbszdvqsszudswbtpiljgvxmoegofttrcwxlwhrghihjcmuvz
2 93
3 40
3 62
4
4
3 28
2 61
1 qpkxibgfvogetpikuxeennwuoefiblugswztlwlkwaclverkmlqscajsickmrcccffqsagxmsks
2 24
1 vvoymwwtycurpkrekizlnhymydztzrwxdvmtcxnmrysg
3 20
1 kluccaqtqjfcaqnsohmllviffamylmzqkgitdycpvjwtoxxzjj
4
3 94
3 64
1 dbubadfzltmvldtwwgysvnhhlzktwcxi
4
4
1 vrbptfdxfcikenupukwckcuocuusubozykmjtywsktfwsinnoetiwcigryekyxlj
4
1 jwtaepatilcoeslcpyvexviobznbzqde
3 26
3 92
4
1 bphftjryctdhplsn
3 10
3 90
2 20
1 drcwcxxlctbgvgisudj
1 couhdailjbwmblxanfbqhzdjtigkeshuoaezsuhngconmhkdzuyfdqciagmrebqxuhhhfzmuobqfhidrqlensywhtrohy
3 114
2 80
2 5
4
3 13
1 gfauoh
4
4
3 102
1 nhtcxmzercibwvxmnkmkjbdhfrdhkjaspkeikrxekctyaeaixpfaluohkkahzoaoqdduinffyxpeevbubtbpvr
3 9
4
1 ruumestcmkeeylsqqqjyzlcsbyguaesejxndhrvkdodjoaoixsywjnedgosjhcbkagrwghgpmbqbddvbkoicecvsfpkvjmjv
3 165
4
2 180
4
3 181
4
2 63
4
1 gbwbovknrfeavgkviydcyfwrujholqopqtdhklqqyflxlrtxiicbfimkljrayhweks
3 132
1 qqjhakqicrnsnqyvzazrgwqjnkfbnfpqfxjwpnfdmjvpacovrcdaxpgrt
2 186
1 hwxahxkltbqznkzxajxiuiswdgfqoiubhiqyie
4
2 27
4
3 3
1 ywaeqh
3 32
2 33
4
2 35
1 ehucuxhpmapjztcevxwdyfjbfllurmlqxvw
4
4
4
3 7
2 25
1 ibpfzgrnkw
4
4
3 1
3 19
3 4
2 21
1 pzkhloyazdrjyinhnollqdehoeubverbjhiucuixqvtdrlvkwzgbnzndblxmwtuiouxobidbldgrdtjcxxiu
4
3 7
4
3 24
2 13
2 1
1 qffawenbvgirarfhoopsksvysqvnaz
2 41
2 2
4
3 3
4
1 eupphkwaljmkmpqamomyqrjpulrtkmqafxugclbw
2 42
2 26
4
1 ddjfihetosvhnozwhqvltjjeorsbcpsolbxdepjbolzfxvvfyfxmtbrprtyjwaolpvigvuizjrwmusbevfp
3 123
4
2 31
4
1 dmptrlpijqzolloicvtdmtsofxmmbxwqmnibnbp
2 50
1 wjhwhmepgxbkuvlbrgkxwmfcrndngbtpf
1 mnunzpqizzkpvnmhemxufnfmjzlnkdvgwemkgpjvahwgggmmdnlfnppa
1 fadxyxbrxhcorftkitrinpcaoujtjunqlh
4
1 sdeyrecvwycnegewoaonlxtqbmczuptvkfgumvoirm
1 nmbsclxqejexrsvounrumnnmpjybdkxfvaxrifsvkdmqqotzeywqmxuekqgvtyqibhhqo
4
3 28
4
4
3 58
3 14
3 58
1 ssvrbxbvivglicfwcbohjnezqcjmtnhvpdwnvnyjhykcxyvrezxiutycmckzhdveulsklqfnavqlytxqwrdrklrjuxorrymjzq
3 142
4
1 zduphuatwymjfmltitxibmrkhtefbrykdmjlozjzgdomzjsdmqybtdaglhljrghxyqgbjskkmbrskwomxxcahol
4
1 zfbcyafdfdsqqyucvwfeevdfdmbpsutlehnauqekafneirxxwkqqrvgpnlpyczbc
2 62
4
3 46
1 pdwshgczmwmavffpktafedoidhjjaxcxhtwjiqcunodpjlcwcscstoqbqalkysunatvbamutbpehlsonqrcuzontrqcqy
2 20
2 102
2 22
2 77
1 wrpnnpkumnmsiizcmidrdbfpszzuuksiqhukuxoeduiqwyksmtacajlrisgfinonzevkkcezjcc
2 10
1 vzafgptgssyeatoehhxaoloucgtnldcn
2 24
2 19
2 50
2 5
1 xozgssbncigda
1 gschzpztkvgstxcgkbfgmvkvnftznslwqqitjzodlsacrznexwjjuigypiwreaxbuumvlnaswdqaam
2 71
3 13
3 1
2 8
1 xldzoamgzkmnunvupe
1 vguocaygmzsokbuqkqqurbhtbkawzfmsjupgxkptmqf
2 67
3 6
3 1
2 5
4
2 2
1 ntjyjxejsdn
1 dseywpunynepudvifvxjewikrffgbnmwhlssybbvsunkfwmdwmdqtdgnaodtwoncgveibahdarorkigqobjmefjecnwgvvtusck
3 52
1 upwajigfrxpcvzvdhljhysizpoelfesntfw
4
2 56
4
1 zcvgkgftcshxfpyndqcjjdjcgvboaa
4
2 68
1 nyeqnuaxfuggbniez
3 54
2 51
3 2
1 gwqqslzwqd
4
4
1 dciknwgfnbfpwgxzfkmgtybdkctvyfqhemewqalxbrrssqovdguefhitnznqeclojbiizcxnwrudeasvvgd
3 61
3 86
3 8
1 jthvpvxvzeruavyxocaadgrqr
4
1 danpfqdfeofvfsjowmlpqgqiyojqwoheicdhzauhttxdglqeenoxac
4
2 100
2 31
3 8
2 6
2 4
2 5
4
4
2 9
4
1 itmeohnnrlnclrudxzshqljgsnghawjkczpkkgqmnzotofvvylavcvolrcaevqlsvpdshmijmufagsimsi
3 18
3 90
1 gqqwaogzqauqdhhlbuclnwulyulujkbyewojgswkrbffhdotqmuhlwvdikboqmu
3 6
3 91
1 fxilkmhengojyfcygklgbccuennblanmcaxsihfus
2 103
1 dciyfjbzttcfmascqtbeadqytqmkdwuiwykcqciyfgcqmzbrepuemlyjurbtfpsbefdjgys
1 mkhfbxzvxtgnfznxeskoxdsvtwjtlnfuxriisxoiipfvovgzdaemnvbuq
4
2 55
2 23
2 20
4
3 18
1 bngzcjdvajszydtokdugxnejzjpwncofup
2 89
1 wkpv
3 28
2 17
3 9
1 yipvvrdketbqgpmdndtumauezbiqixiynep
2 8
1 nnyxkcqcerqeykzapmkrynouvrcaqvuiugopniofndwsaonoipyztumdequtyaczsslnwaeoj
3 26
2 113
4
2 24
4
2 36
1 dmqigqejmspkacdvsshrygenwfouddxvg
2 94
3 2
4
3 93
3 64
3 49
4
4
4
2 35
2 8
2 1
1 oimqaliltwa
1 qhzosoofqzbznczpfmnrfnilyywgmzazgtwmrdlgujpzuhrexiadhzlcmfmlxgarepwpihmlqapctgsbuzpiyjaisrfbzpumaen
1 zclkymasodkdzyownaxjlmzmanalifqcbohvgcpdnwdgkpweyvybzblsjbgtwghzwdjr
4
4
1 umzkyeinofipoulfurgsfwgzulwuvahjzgzosrtztuwbhelumwhxbvpnfjmhmzuifzpiu
1 njl
3 36
1 mousguduwquptgozdhndigzupygkrsowrstpanosmegegafnzxpsivzdlmriod
2 115
2 19
1 vjozqmnkfvxhnkbz
3 18
4
4
1 owplbcpescnoexzvjodymibigbkkrxwmphvgemzvohoksrjxwdbuvhszatpdtjeobthuychnxfhhitrsed
1 nfwtbugifswodgpqil
2 66
3 19
3 64
2 15
4
3 26
1 enkpwubcplzzzxezfhudnlgupcvptjmwfdzxrrhclfgyvdgusroy
3 47
3 97
3 9
3 86
2 5
1 ucovxkqkwukhlsibfedqei
1 heptpxgunulrlhhzdohfhedgcluoevnbeocqzakbnsktmjfcluf
4
3 93
3 74
1 mbffamaeszcgnruexuvpcswnslmmrbygqomwerpzayiyifppzsjye
2 59
1 hcqxgmwsyzexqzgsefwmilthxuwnrdhiyfclknuvpzhtynrcwyfwuoxdoumzyvfjhhqqaefgzmlibexdhakxgdnalmqqtpyrvzf
3 164
2 117
3 34
4
4
2 75
2 31
3 4
3 15
4
3 43
4
4
1 ocmnunkxegwmpbcclgfljqvjbcctiujmavcbjbjj
2 158
4
2 214
2 10
1 bwuggyivvaeleyhtrghvmagjbyiutptzxsdlgpylvugwxcqqjfiloajhgsbnbjqihbtrzgpfkrhjfowkefzp
2 78
2 8
4
3 6
1 ayduik
4
1 zibkyqbzaaayutthqwyjyejy
2 20
4
1 phyelxvzwfpxvqlpsvzwnngrwbxjujgtivqywyjiiuwwlyiqfooieccmhbponlkojooruezmvhuvmkltgholcuadjpgqeooahmg
4
1 paudqogsnbnjqvngxhzpdivjpgxhefkupeaivhqvlygxtlmey
2 80
3 1
4
1 bbqgtiuslnndfforhhvxoqnznennfwkbuf
4
3 52
2 30
1 etcxdpnhnaqvaakeaelbnypnyvdpoigijronsfnnhoiufxqnvsyfkwrqpuxdcfqpiejsrskl
3 123
4
1 balaezzmfwlcspzglyphkjkmxdilneeanwqlgqpevohljyavgmhibprsmtheqxghruoldsbrybatyboooqkmoibebddxczkh
2 26
2 38
3 24
3 3
2 36
2 47
4
4
4
3 119
3 70
4
3 99
3 143
3 115
2 47
3 84
1 aqyh
1 hvegtobabgimuaipxdcqbrklldmhacttrzmjtlaworkhhdjdjcdhcgmotgpvdbxj
3 100
1 njkzcupijkbjoxoadbgmdwvqijzgqnqeuiianssnetkiximhemzquswfhqzwqbumjbymibcpspolubwis
2 149
4
4
4
3 12
1 bwsagsdebavqqmdusoasmuwppnmsagdrhzzuxfyaxyigqfjbbxpv
2 30
4
3 6
2 62
1 iyyyihhrwdzxfxdmvmzzkxujufahunulcfybncdjqneqjfhw
2 74
4
2 24
3 62
1 nlxnzoqnbwyoaknqyluybqhfwveleoiuwihsnendryecsnmowjzierqmockpubibrijcghdmgsdhvugqgfryjgwxnaykv
1 dgucnxfdjpyxnlrdyevhedjbbxaqncpjmubcxopypjqmdpuyihuaxwzahmw
2 74
2 184
4
1 uwrbrmuvwltfdvctckwksztggpmwdtwzvsefctkqxozczamoytvtcwiloxviqlpv
1 gsslnhdkorhtbqjusgapuidxrihdwdiikorsmgzwvssdcqlctevraqlbruintizonjdhlkca
1 aggouyupavbnkdybbqwaicaaesyuiaeiieitnbouxjlyqwbndhwtmrotyiwmfr
2 8
2 183
4
1 ralolbyifqazlkltzeueetuljdmfbgdtlrvnrcgwzzbzqkhxxkjsgpsiwlsvnxq
1 aoqrzlknsacwpehjkqbjgubnvsapbbiojvwtvn
1 sdsjwvvxeqfwmxekzolcahphfyjkbdqhnvohufelhjvaaywhyunqgxkarlcvvjyxjcqkicpvepvvugqdczq
2 212
3 112
1 cmirlenaulmnqxgvaaohulvjkvwccdceogbt
3 36
2 130
4
3 294
4
2 7
4
1 swjeubmhsvdezycpdpaxcbnvqhbvfaerjvkroifuprpvkvjzrxlvdwipdmnkhirmunxxnsfqyykhqgdlagmkvnnbfmc
1 aqdvlhiurilaazxqjnfmfjdnvvxholbwkqzxneicuisgis
1 bjbzlsmsywjdxylljcthnkqivwlxcygkqhhxukotftplqfgdgnxookmaobqipdqgkcafsks
1 jfgkzpleqkfqphscczweyakyfttokntlsuxgxqwnpncirobqaiyzkub
3 297
1 dhnzcgxqhqyytvwjbnsudjxqpvskbhjqtrybraoofrkownqjcwxjqhbtxgplqqzksw
1 wklnhduipfudjozryqptjuzdclmffhetdhemiedhhdjudue
3 494
3 617
3 358
1 hakrsjoolbiglqyxtzaar
3 317
3 616
4
4
3 453
2 211
2 185
2 147
3 105
3 15
3 2
4
1 nahvbchtgvyaiqomjqknv
1 ahdwpahljjckiqocimqmqkrmmpmwopvcxliavdosanxsybxktlespxaiiggcxzeecxxjfknhvdcbasdhxlzwg
3 196
2 26
3 274
1 kfefmocelyngbyyqtyadikasxprqtrwoajloypohlfysgieyavoojqrxouqysz
1 mknebfkdijrdewgulvqndcantbg
4
1 rbdyeetrotwovbga
2 99
1 wnqqjnezdcctvwgafibjmrkmm
3 323
3 37
4
1 jbckmjsjvxroybodmdbezrv
2 247
1 l
1 xcxlmxavthqyhorbckgfdjtooemkyfrrveoeczdlszkuulopxkcpjqkk
1 fa
3 169
3 14
3 7
4
3 23
3 119
3 128
3 149
1 ihkbnxgiomopnvsnzrgwohxjwrdftnvvrhrlr
2 193
4
1 nzasbzigesgawcjpqoidcoqcdeczvzdnksnwmejhcbrjstznvamuputvfwphexvidoedalmyfwgj
4
2 55
2 153
4
4
2 88
4
1 tppyucbhwasjjlnreghrggcaxugivfmzpcgmbjifyjmbujugktbevnzruniixvotrcceavticcaidyfqllziepftmnk
2 157
1 mflmblfuhnhwtpstvqnoqdcwzddqjhsmowjqkrznircqjrdhu
2 119
1 ezqwaoabgeaxpvgleerirnidpahbqbsyyqwktrpzsoxdwewvhhdigpg
3 41
3 11
4
1 wiwofwlixzolvdlocebdoarmiajzgkqlcvfwogtxdnz
2 55
2 45
4
2 12
3 22
1 cspfjexzrighrytfcoa
1 ovhuncgetwsxgkqasvrfqogehqptgoefnzkpqjuyibpbadnietjmtfopmyrpybrzuuewhvvmwacuawdqlzoy
4
3 6
2 3
1 bgohzyrup
3 62
3 36
1 flxjxizybszjyfcjplnvpvwkspqioidhkiyexkksoghhddpqtela
2 76
3 59
1 pewibenschazktrjwwgljnxhwdgpnxzqqqkgvekhdjsgztgcqozhegyhbdqbmk
1 zugkghdrnznvdjvqaqhhzbaokmewektvguvvzsuongf
2 8
4
1 autygskyfko
4
2 14
3 118
4
1 meomacnutpseqbvyqchpkyukotlyezufnjowvnxmhffowkfufebxbmbgxpourdlwwrveb
2 59
2 21
2 123
2 17
3 3
3 4
3 14
1 dbjcsgkioqzjieavenlfwvjsripatvmtnrbmqeuncgvfrmwkejwcftqaecvzdhokgcwdphrlyuimgnyxisxaiqrlf
4
1 nilxanzzlvnhdiykhtpsdqqdszrjqotssnpdavqwvrxkulcvztpuxcubfujzjptizikyezuinyqrjjqwsfpfdpxgjgnbvuziqk
4
4
3 10
4
4
4
4
1 dtioaqtnqbsgal
2 70
2 48
4
4
2 131
3 46
4
3 108
4
1 clagygmjejqtofwlfynjrneisyswipavdhzoxiubvkrdvfkgueqalzejyrtshxawebaojmiwlvkqljel
2 49
4
4
1 jiwlseteoruqs
3 33
2 114
4
2 93
4
3 135
3 135
3 85
2 11
2 61
3 48
4
4
3 67
4
4
2 107
4
4
4
3 11
2 32
1 upmjxruncjfovhwpughugetbgzxirqzwanlxrylxcapqjwbrw
4
3 17
2 50
3 27
4
2 30
1 vmuayjgduvhuuzmhyjaxsszywejujwgastcmnlfcfebxqjkbkmslspfaykxgvbgymvfshwtbbvetojwv
2 28
2 20
1 sqaut
3 70
1 gxrtgkdnwaqomeympykresdyweehlegfapedzzqwppknrmypqkxc
1 kz
1 eahazuwfokpabxhsrxdvpnqnidqzyilkxgv
2 36
2 50
4
3 48
4
4
2 130
3 14
3 27
3 26
3 8
3 7
3 29
2 13
2 3
4
3 13
3 15
3 11
4
2 27
2 6
3 2
3 3
4
1 ksqfllwuhhgmdosyqhkpggczaqiewekrhwzgiumjmtealiqjthifluqbbjqxgehcxoujnckmjvgmyvdylquxpyamkzem
4
1 ckm
4
2 3
3 4
1 hi
3 2
2 2
1 wmgaxzpbdkrjeslvowalbvgfqd
1 jzkftmkaaabpzrrvwdiohepbjmwsnhghwoctriebbbbajrihgbaizusyypjqqufrndeqsdhhu
4
4
3 3
3 3
1 cyrcuqouykelbuqlkifjazvbmjpxkkke
2 27
3 8
2 8
4
3 11
2 7
2 1
3 3
4
3 3
2 1
1 rczwctlilrfsnxwvuaoxjnjsbodsunnrzk
1 ejedncmrmyalnxpssirbebqmnfgsuwdxhwmqzbggydqvdqh
2 32
3 1
3 31
4
3 75
1 hrexcezwkcdyrxhskjrdrwjrzimbpdnefvymrfvniwjvcdveeraforblcarcmahedvljiigbkmh
2 40
3 45
3 79
1 dhigrcsyvzfksieyvhanxdtgdwpdilftlgwolyygrhvgjwaqxpqxqdzzmufkpmqseiruitu
1 dpmzkfecpucoyocmriktwltlbliwlnyieexecyahimpyntbwxgjubgqatxmkaviybdedjbewnzjxhsll
3 192
1 qbztysycthrhec
4
2 186
1 dcjexpwimcxvokxwipkzinkkwklnrbirslwcsuqppazccqyyimkschdlqjzvtjwf
3 35
4
4
2 34
4
3 56
3 219
1 lssivqgfuwvsszvhqkkwawqfqicqhkvyimeqclyomiyrwkiitpuwovvvxbyqnzaitctnkupsmwsfyvbkafsvjvqiz
3 170
2 259
4
4
4
4
3 34
4
4
1 vgugkodtlorwgfunqpqamghhjttzplkczrrtofogfunay
2 2
4
3 56
1 letczmlauoysmzrckkdzybibbtjhoajgvreasdvpdjhcobitvvxtwdzyinccenjxwbdlsegtvjcbyowgcfklkgmfuqwerkcbon
1 g
3 25
3 216
1 nicotzliccpscdvtvfldkospwztnpowlrievujrxrduvjchuzrtgn
4
1 pemzjxlikkbvepdpcelkrukxwqtonhummxcsieg
3 233
3 211
1 jeslhbeyazcnlncciobozxtpjrcolruqdflucozxjamfutagpalclksemiffhrpifxgkernwjbuhjrqouqlyjfw
2 127
2 182
1 vtwgmfadnzdddtoiodtfqwkyvktifzkszionqkozkugqzqlkticvsqiyeqmnzfhmhxniefarpihb
4
4
4
1 wrwpgwyrbtdjhnduwpcvaujmczgkyvirauletlxqvwzoterfxztgetzmthzcejzsbvapazqsruyoccdvglqayrka
2 133
1 qynkpjowqkzdcwndvwtzuumnpsgerrocjsfynzulkixxrjnesrvrotssdhathtaqtcalmyvzfgeowdc
1 diogbsjuiebzaahvdcfouufvzyisjzvktaatqotnvpxbcvircarqkeveteyyntskvgrfossun
1 yynzsvfdkcseheqzjvrhgoffgqdvtnndflklcoilckdrenveulxduekke
4
2 296
1 mummwpavxllzfrcwmhjdtiszkopusrhisslyaqgtwvqtsaenttl
1 irbeskjowejdnlxlkboibvborllwzlosbvqbrighvsykszztlsskgofubrbwevvmkanhgmiqjz
2 128
3 87
3 34
1 romcejjutkmbzfscfgcwxspxzjpnuizffoidvk
4
4
1 ntabbdiardtwktaxcazueistecizjqgfgvadhwktnlgelemskpjsmutuqmwtpyapwegedpp
3 105
1 fzffufayqun
1 pbirqlmbsvypgzjnchkvruhcchhfhyktvzlugrbgilticbiaiu
4
2 351
3 20
2 19
3 1
4
2 7
2 5
1 dcsxkezdhffmqrvpjfyscobapmmhxqjnltnybng
1 jekxggmoxogockhjormsf
4
4
4
4
2 5
1 bsadcvkhenljczjoqfnvxvmqpfjxxeiutzswmedbwlpezbfxvr
3 40
4
2 4
3 1
1 kbbwccvrxnqrsnzeggsnjjykyuxnvyoyhdtlvfrzbgzhqrgtviriehzjhaueamcxmocsmsozqvyfopkxalgmunywxbnl
3 3
4
4
4
2 21
1 pvnfqonzyksmlucynggtgurigi
1 pdhjqhuehymkpqyowlrgcukztprgrpjufrtdx
4
2 2
1 mybrssvsgntnfdnvcszzbdqetiqzzxgiaorvcqobyfilymdomxcf
1 dyowsswrkalzcmsddpzzgsfbxyp
2 100
3 2
2 1
3 1
4
1 riqdboqotxheuuxccflnmuuhzwgsxzrimxwhyrygaktjfhohmdtexxvlbtpvzqsfpicpvtmpqusksnztbph
1 mfbrqrpytiizhszusgvbw
3 65
4
2 69
3 11
3 10
2 14
2 3
1 gqbvkrcqgwcbstjnyudakmvpwgdaxnmhccwhzfuonvejzvfpvswbszbrhjiddkutmssfnoazepxjeebdpyoqxqqsyuzwwwzs
1 mikpbjdmsxuugirzsqehiblrzimztbzvwvktikniijhubosrtslfklrrdjaemjfelpyxszpxph
3 48
1 rpxwyxavyioxilawhiunzgrxo
3 101
4
4
4
4
1 zbfhcacupuadbmexpmxzwssqntkfyauimbtpnyevirralggernmcruwtcqgzfunpwkkqgkwdlbaaristunzucascjjo
4
2 2
3 1
1 ievcqowtpelgrw
3 6
4
3 1
1 cnttrk
4
4
3 1
3 1
3 2
3 1
4
2 7
3 2
2 7
1 apeijesocpgaki
2 11
4
2 2
3 15
4
2 17
4
4
2 1
4
1 imcyirjzsjmyurozcurfktrcgoqhbjyhbigitoddfqxmthrkjqlrxavibdqrdujgyiabiqvaewjtbhamqqleq
1 iqktmxsjbbjztsfuzanrpokisgxtqsrowxaxlageujrdwzfhi
3 7
4
2 79
4
4
2 1
2 1
4
1 jxuqktkjjhpcbgynfwoalx
4
4
2 1
1 aprrmkmjgmnrpzdtd
4
4
3 3
4
4
4
3 24
3 10
3 56
1 qpquvopgwzwoltmvhgrjnbhzaypgipb
2 67
1 vqfonurkoeolsxcglzsiqmfmlqkeccjmtidhkdnymgxukrxbwdcytdvz
1 kzlhiwukigwtalferogudlntzvfplllgkecscjaz
3 121
4
4
3 27
3 29
1 emgpabvahgzvgdzkzgrxmjtoulzawfsgqclzufzogvmdecisrihlwrlvylvbzlzcnbhuivudreufenmvlvodkxp
1 iclkauelamxbjmjugav
3 5
1 khzbixzloiybwixwiujocgu
1 dgzjwllr
2 185
4
2 107
4
1 aqtzsptdny
1 mnaahzibnbnplalirmtuxevozhjwrtiqbalficdiqlvqtwuyopklmcu
3 159
4
3 153
4
2 78
3 70
3 21
2 19
1 yrtlgabjbpbgprnvxxgcshlawhhjouuzltdcmbmuqdvruqeqhuybfrzo
4
3 86
3 88
1 pxbqeqoisjlwlykdmoqukpbizzigceapxwqndvhzzuwdnzazi
2 72
3 38
2 56
2 8
4
3 7
3 1
2 7
2 4
4
3 1
3 1
4
4
1 pqvnoamkfpgchfoaespkbairncsjpvkdbyufeclygxltbjojkiitqzbvhpibsgtybngspncbaws
4
1 rbbmkwtmsyenymzxcfycodxknadctgkcdeqfpzbljbxmzvanwkzedbl
4
3 2
1 acdqlqollfmmbonlqazmgqhpiuywnoetshsmh
1 kglbbdemwfwyzroqhfzjjhmxgkxqkychxxgkucnphs
1 ataqfcfblexdtktqauupckkmuovraklxxqgcwbqhnmkjjfqmmxzyeqiciwknsncifn
3 16
4
3 111
3 67
4
3 24
4
4
2 29
3 70
3 91
2 99
3 6
3 5
1 lzltwyskmrhrakoydsew
2 28
2 1
4
3 1
4
4
1 rbkdmsmxveelbnloxzargcklkkozeamftqha
4
4
2 94
2 1
1 rrhnsqofheiobcyvhjlxpnasboqvtjwlyqew
3 45
1 nrgjlhfaiwedijdqovtloygpfawxaxwhsagesawowhdsoxqcekilybknb
4
2 8
1 obapayyhp
3 39
4
3 40
3 8
4
3 28
2 3
2 19
4
2 46
3 2
2 2
4
3 1
3 2
1 nksbeycdcssgtrqbthroublmseyyqnxiruerofcjmhfgwbipjhbeehdzxzdveeelfdxogbzzrswghooxxtlqemz
2 51
2 16
3 16
3 22
4
1 ppythedrgjwtjaktmvrahwmibzwurredvmoezgmhnkzvrbehtsybqxybisrczlmrtgopvwtf
2 47
2 11
3 49
1 mcljhabnnmomrkdxmlvdvwcebbhivdxtyffimncyailpfupqtxxpwfbhaxqdyfzyrzuoilmotqdofanxsexmykrrsvziksq
4
2 46
4
4
4
4
4
3 42
4
4
2 34
4
4
2 10
1 yotkjrkexcehgaovwgvprbkuojxlljrxmsyqxybuzhdirvoqmtdyryebvlapnsvmgnnizsumigvvonjslcviarfmvvjldg
4
3 16
4
3 24
1 evuwvxsnjgioqllwggaizkxtmkwxonibvdoxhcjblqfqxeqhrpsgrhswmnnftrfcpdwougrzutnjpwcoxlrxdzzhogisjfwndvf
4
3 28
3 51
4
2 13
4
4
3 2
3 4
3 14
3 15
3 11
1 hbtgcwnfzjxdqatgwupkrhjwojlyweaprcq
2 31
3 2
2 7
2 3
1 wyheyxabdyjdpatgctctucpchagxtzrkonnakaipchimkdrtobapotcfozhllvjjxabkhyxapceuymorzsorfmifo
3 33
1 tglnsljcbjyjzbayiqntwfzovgsniszyefqqko
2 69
4
1 pferjkahehjdzwithvpvsrhyfnvzbmdfrpqabmozjlbwkstkoipjekuvg
4
3 56
4
4
4
1 utqfcriecgdnxgznggdymmbsozzndjgblgnzulxbfe
1 jkfm
4
4
3 13
4
1 orfalzonfnalzqnlhqgbxrieujipofcq
4
1 yegjfkx
4
1 hnnndideggcooaugsqykuiwqecaaswdxokmakdcuxkvfklsjhxwaxxbxdfxmumnxqhhwsrgwurugjfzhfissjlsygtsftxczr
3 89
2 55
3 33
1 mdtncrspnklvzdbdlluesduejhqrnugwkvbjzvglpanigygtrrcitmmgnfkhilqwsqsufzsmsdysckxrbclfwtamtnxt
4
1 ipmsowembyiygrivskxefdtxohixqqmigcqkhfepcfojwvufcfwfnrdnurtuskceeasikgnkahzpkbulpawc
3 61
3 96
1 ckxjkebrlngcjutizxrxeywsfkhnfligxzolwwozymjsatrbmjchghjezllrshwoasssmmstejwmztatydrjsaztkdyt
