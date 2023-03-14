require 'pry'
require './solution.rb'

RSpec.describe "noPrefix" do
  it "it returns GOOD SET if no matching prefix found" do
    example_array = ['aab', 'defgab', 'abcde', 'aakcde', 'bbbbbbbbbb', 'jabjjjad', 'werweraabwer']
    expect(noPrefix(example_array)).to eq("GOOD SET")
  end

  it "returns BAD SET and the first word that has matching prefix" do
    example_array = %w(
      dcjaichjejgheiaie
      d 
      aab
      aac
      aacghgh
      aabghgh
    )
    result = "BAD SET\ndcjaichjejgheiaie"
    expect(noPrefix(example_array)).to eq(result)
  end

  it "returns BAD SET and the first word that has matching prefix in a big set" do
    example_array = %w(aab
        hgiiccfchbeadgebc
        biiga
        edchgb
        ccfdbeajaeid
        ijgbeecjbj
        bcfbbacfbfcfbhcbfjafibfhffac
        ebechbfhfcijcjbcehbgbdgbh
        ijbfifdbfifaidje
        acgffegiihcddcdfjhhgadfjb
        ggbdfdhaffhghbdh
        dcjaichjejgheiaie
        d
        jeedfch
        ahabicdffbedcbdeceed
        fehgdfhdiffhegafaaaiijceijdgbb
        beieebbjdgdhfjhj
        ehg
        fdhiibhcbecddgijdb
        jgcgafgjjbg
        c
        fiedahb
        bhfhjgcdbjdcjjhaebejaecdheh
        gbfbbhdaecdjaebadcggbhbchfjg
        jdjejjg
        dbeedfdjaghbhgdhcedcj
        decjacchhaciafafdgha
        a
        hcfibighgfggefghjh
        ccgcgjgaghj
        bfhjgehecgjchcgj
        bjbhcjcbbhf
        daheaggjgfdcjehidfaedjfccdafg
        efejicdecgfieef
        ciidfbibegfca
        jfhcdhbagchjdadcfahdii
        i
        abjfjgaghbc
        bddeejeeedjdcfcjcieceieaei
        cijdgbddbceheaeececeeiebafgi
        haejgebjfcfgjfifhihdbddbacefd
        bhhjbhchdiffb
        jbbdhcbgdefifhafhf
        ajhdeahcjjfie
        idjajdjaebfhhaacecb
        bhiehhcggjai
        bjjfjhiice
        aif
        gbbfjedbhhhjfegeeieig
        fefdhdaiadefifjhedaieaefc
        hgaejbhdebaacbgbgfbbcad
        heghcb
        eggadagajjgjgaihjdigihfhfbijbh
        jadeehcciedcbjhdeca
        ghgbhhjjgghgie
        ibhihfaeeihdffjgddcj
        hiedaegjcdai
        bjcdcafgfjdejgiafdhfed
        fgdgjaihdjaeefejbbijdbfabeie
        aeefgiehgjbfgidcedjhfdaaeigj
        bhbiaeihhdafgaciecb
        igicjdajjdegbceibgebedghihihh
        baeeeehcbffd
        ajfbfhhecgaghgfdadbfbb
        ahgaccehbgajcdfjihicihhc
        bbjhih
        a
        cdfcdejacaicgibghgddd
        afeffehfcfiefhcagg
        ajhebffeh
        e
        hhahehjfgcj
        ageaccdcbbcfidjfc
        gfcjahbbhcbggadcaebae
        gi
        edheggceegiedghhdfgabgcd
        hejdjjbfacggdccgahiai
        ffgeiadgjfgecdbaebagij
        dgaiahge
        hdbaifh
        gbhccajcdebcig
        ejdcbbeiiebjcagfhjfdahbif
        g
        ededbjaaigdhb
        ahhhcibdjhidbgefggdjebfcf
        bdigjaehfchebiedajcjdh
        fjehjgbdbaiifi
        fbgigbdcbcgffdicfcidfdafghajc
        ccajeeijhhb
        gaaagfacgiddfahejhbgdfcfbfeedh
        gdajaigfbjcdegeidgaccjfi
        fghechfchjbaebcghfcfbdicgaic
        cfhigaciaehacdjhfcgajgbhhgj
        edhjdbdjccbfihiaddij
        cbbhagjbcadegicgifgghai
        hgdcdhieji
        fbifgbhdhagch
        cbgcdjea
        dggjafcajhbbbaja
        bejihed
        eeahhcggaaidifdigcfjbficcfhjj
        )
    result = "BAD SET\ndcjaichjejgheiaie"
    expect(noPrefix(example_array)).to eq(result)
  end

end

# hgiiccfchbeadgebc
# biiga
# edchgb
# ccfdbeajaeid
# ijgbeecjbj
# bcfbbacfbfcfbhcbfjafibfhffac
# ebechbfhfcijcjbcehbgbdgbh
# ijbfifdbfifaidje
# acgffegiihcddcdfjhhgadfjb
# ggbdfdhaffhghbdh
# dcjaichjejgheiaie
# d
# jeedfch
# ahabicdffbedcbdeceed
# fehgdfhdiffhegafaaaiijceijdgbb
# beieebbjdgdhfjhj
# ehg
# fdhiibhcbecddgijdb
# jgcgafgjjbg
# c
# fiedahb
# bhfhjgcdbjdcjjhaebejaecdheh
# gbfbbhdaecdjaebadcggbhbchfjg
# jdjejjg
# dbeedfdjaghbhgdhcedcj
# decjacchhaciafafdgha
# a
# hcfibighgfggefghjh
# ccgcgjgaghj
# bfhjgehecgjchcgj
# bjbhcjcbbhf
# daheaggjgfdcjehidfaedjfccdafg
# efejicdecgfieef
# ciidfbibegfca
# jfhcdhbagchjdadcfahdii
# i
# abjfjgaghbc
# bddeejeeedjdcfcjcieceieaei
# cijdgbddbceheaeececeeiebafgi
# haejgebjfcfgjfifhihdbddbacefd
# bhhjbhchdiffb
# jbbdhcbgdefifhafhf
# ajhdeahcjjfie
# idjajdjaebfhhaacecb
# bhiehhcggjai
# bjjfjhiice
# aif
# gbbfjedbhhhjfegeeieig
# fefdhdaiadefifjhedaieaefc
# hgaejbhdebaacbgbgfbbcad
# heghcb
# eggadagajjgjgaihjdigihfhfbijbh
# jadeehcciedcbjhdeca
# ghgbhhjjgghgie
# ibhihfaeeihdffjgddcj
# hiedaegjcdai
# bjcdcafgfjdejgiafdhfed
# fgdgjaihdjaeefejbbijdbfabeie
# aeefgiehgjbfgidcedjhfdaaeigj
# bhbiaeihhdafgaciecb
# igicjdajjdegbceibgebedghihihh
# baeeeehcbffd
# ajfbfhhecgaghgfdadbfbb
# ahgaccehbgajcdfjihicihhc
# bbjhih
# a
# cdfcdejacaicgibghgddd
# afeffehfcfiefhcagg
# ajhebffeh
# e
# hhahehjfgcj
# ageaccdcbbcfidjfc
# gfcjahbbhcbggadcaebae
# gi
# edheggceegiedghhdfgabgcd
# hejdjjbfacggdccgahiai
# ffgeiadgjfgecdbaebagij
# dgaiahge
# hdbaifh
# gbhccajcdebcig
# ejdcbbeiiebjcagfhjfdahbif
# g
# ededbjaaigdhb
# ahhhcibdjhidbgefggdjebfcf
# bdigjaehfchebiedajcjdh
# fjehjgbdbaiifi
# fbgigbdcbcgffdicfcidfdafghajc
# ccajeeijhhb
# gaaagfacgiddfahejhbgdfcfbfeedh
# gdajaigfbjcdegeidgaccjfi
# fghechfchjbaebcghfcfbdicgaic
# cfhigaciaehacdjhfcgajgbhhgj
# edhjdbdjccbfihiaddij
# cbbhagjbcadegicgifgghai
# hgdcdhieji
# fbifgbhdhagch
# cbgcdjea
# dggjafcajhbbbaja
# bejihed
# eeahhcggaaidifdigcfjbficcfhjj