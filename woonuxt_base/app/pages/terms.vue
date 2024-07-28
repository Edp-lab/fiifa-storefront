<script setup lang="ts">
const { t, locale } = useI18n();
const language = locale.value;
useHead({
  title: t('messages.general.termsAndConditions'),
  meta: [{ name: 'description', content: 'Terms & Conditions' }],
});
</script>

<template>
  <div class="container my-8">
    <h1 class="mb-8 text-3xl font-semibold text-primary">{{ $t('messages.general.termsAndConditions') }}</h1>
    <div v-if="language == 'lv_LV'" class="my-8 prose max-w-screen-lg">
      <p>
        SIA “FIFO”, reģistrācijas Nr. reģistrācijas Nr. 43603086114, juridiskā adrese Bauskas nov., Īslīces pag., “Kaimiņi”, turpmāk – internetveikals – nodrošina mājas lapā pieejamo saturu un sniedz preces/pakalpojumus saskaņā ar zemāk izklāstītajiem Lietošanas noteikumiem.
      </p>
      <ol>
        <li>
          <strong>Vispārīgie noteikumi</strong>
          <p>
            Ja patērētājs, izmantojot mājas lapas starpniecību iegādājas preces/pakalpojumus, tad šāda savstarpēja vienošanās tiek uzskatīta par Distances līgumu un ir pakļauta Latvijas Republikas tiesību normām, kas regulē distances līgumu tai skaitā, bet ne tikai, Latvijas Republikas „Patērētāju tiesību aizsardzības likums”, Latvijas Republikas Ministru Kabineta noteikumiem „Noteikumi par distances līgumu” u.c.
          </p>
        </li>
        <li>
          <strong>Pirkumu veikšana</strong>
          <p>
            Interneta veikalā pārdoto produktu cenas un specifikācija ir norādītas blakus produktiem.
          </p>
          <p>
            Lai veiktu pasūtījumu, pievienojiet vēlamos produktus iepirkumu grozam. Aizpildiet visus nepieciešamos laukus un izvēlēties piemērotāko piegādes veidu. Pasūtījuma kopējās izmaksas ar piegādi pēc tam tiek parādītas uz ekrāna. Veiciet pirkuma apmaksu, lai pabeigtu pasūtījumu.
          </p>
        </li>
        <li>
          <strong>Apmaksas noteikumi</strong>
          <p>
            Norēķinu valūta vietnē ir eiro. Pirkumu iespējams apmaksāt izvēloties sekojošas maksājumu metodes, ko nodrošina maksājumu platforma makecommerce.lv , Maksekeskus AS:
          </p>
          <ul>
            <li>Latvijas internetbanku maksājumi: Swedbank, SEB, Citadele un Luminor</li>
            <li>Visa/Mastercard karšu maksājumi</li>
          </ul>
          <p>NB! Izmantojot internetbanku apmaksas metodi, apstipriniet pasūtījumu un noklikšķiniet uz pogas “Atgriezties pie tirgotāja”.</p>
          <p>Personas dati, kas nepieciešami maksājumu veikšanai, tiek nodoti licencētai maksājumu iestādei Maksekeskus AS.</p>
          <p>Līgums stājas spēkā līdz ar veiksmīgu maksājumu uz internetveikala bankas kontu. Ja kādu iemeslu dēļ pasūtījumu izpildīt nebūs iespējams, Pircējs par to tiks informēts un samaksātā summa tiks atmaksāta pēc iespējas ātrāk, bet ne vēlāk kā 14 dienu laikā pēc paziņojuma saņemšanas.</p>
        </li>
        <li>
          <strong>Piegādes noteikumi</strong>
          <p>Preces tiek piegādātas uz sekojošām valstīm: Latvija, Lietuva, Igaunija. Iegādātās preces tiek piegādātas izmantojot Omniva pakomātus vai saņemtas veikalā. Visas nodevas un nodokļus, kas jāsamaksā, lai saņemtu sūtījumu piegādes galamērķī ir jāsedz Pircējam. Piegādes izmaksas tiek parādītas, pirms pasūtījuma apstiprināšanas. Iegādātās preces tiek nogādātas Pircēja norādītajā adresē 2-5 darba dienu laikā. Izņēmuma gadījumos mums ir tiesības nosūtīt preces līdz 45 kalendāra dienām, par to informējot klientu.</p>
        </li>
        <li>
          <strong>Atteikuma tiesības</strong>
          <p>Pircējam ir tiesības atteikties no preces 14 kalendāro dienu laikā no Preces saņemšanas brīža. (Atkarībā no preces, pircējam var nebūt obligātas atteikuma tiesības, šādā gadījumā iemeslam ir jābūt skaidri norādītam un izskaidrotam). Atteikuma tiesības nav piemērojamas, ja Pircējs ir juridiska persona.</p>
          <p>Lai izmantotu 14 dienu atteikuma tiesības, preces drīkst izmantot tikai tām paredzētajiem mērķiem, patērētājs ir atbildīgs par preces kvalitātes un drošuma saglabāšanu atteikuma tiesību realizēšanas termiņā. Ja preces tiek nepiemēroti izmantotas vai bojātas, lietošanas laikā nevērīgi izturoties pret preci vai neievērojot instrukcijas norādījumus, ja ir nozaudēts preces oriģinālais iepakojums, vai, ja tās iepakojums ir būtiski bojāts , internetveikalam ir tiesības samazināt atmaksājamo summu atbilstoši preces vērtības samazinājumam.</p>
          <p>Lai izmantotu atteikuma tiesības, jums jāiesniedz atteikuma veidlapu, kuru iespējams atrast šeit: atteikuma veidlapa, nosūtot to uz e-pasta adresi info@fiifa.lv 14 dienu laikā pēc preču saņemšanas. Pircējs sedz preces atgriešanas izmaksas, izņemot gadījumus, kad iemesls atgriešanai ir tas, ka prece neatbilst pasūtījumam (piemēram, nepareizs vai bojāts produkts).</p>
          <p>Pircēja pienākums ir bez kavēšanās, bet ne vēlāk kā 14 dienu laikā pēc atteikuma veidlapas nosūtīšanas internetveikalam, atdot Pārdevējam Preces. Pēc atpakaļ nosūtīto preču saņemšanas internetveikals nekavējoties, bet ne vēlāk kā 14 dienu laikā, atmaksā visus no pircēja saņemtos maksājumus pamatojoties uz Distances līgumu.</p>
          <p>Pārdevējam ir tiesības aizturēt maksājumu līdz brīdim, kamēr nav saņēmis no Pircēja Preces vai preču atgriešanas apliecinājumu. Ja pircējs ir izvēlējies citu sūtīšanas veidu nekā lētāko internetveikalā piedāvāto sūtījumu veidu, internetveikalam nav pienākums kompensēt pārsniegtās sūtījuma izmaksas.</p>
          <p>Internetveikals nav atbildīgs par kavēšanos ar saistību izpildi vai to nepildīšanu, vai cita veida neizpildi, kas radusies tādu apstākļu un šķēršļu dēļ, kuri ir ārpus internetveikala saprātīgas kontroles.</p>
          <p>Internetveikals patur tiesības atteikties pārdot preces un pieprasīt preču atgriešanu no Pircēja, ja internetveikalā norādītā cena ir ievērojami mazāka par tās tirgus cenu kļūdas dēļ.</p>
        </li>
        <li>
          <strong>Patērētāja tiesības par līgumam neatbilstošu preci</strong>
          <p>Internetveikals ir atbildīgs par Pircējam pārdoto preču neatbilstību līguma noteikumiem vai trūkumiem kas radusies 6 mēnešu laikā pēc preču piegādes dienas klientam, vai bijusi piegādes brīdī, ja šāds pieņēmums nav pretrunā ar lietas īpašībām vai trūkumu. Pircējam ir jāinformē Pārdevējs par preču neatbilstību nekavējoties, 2 mēnešu laikā pēc tās konstatēšanas, t.i., jāiesniedz sūdzība. Pircējs var iesniegt sūdzību, sazinoties ar internetveikalu, rakstot uz info@fiifa.lv.</p>
          <p>Internetveikals nav atbildīgs par defektiem, kas radušies pēc preču piegādes Pircējam. Ja iegādātajām precēm ir trūkumi, par kuriem ir atbildīgs Pārdevējs, Pircējam ir tiesības pieprasīt preču trūkumu novēršanu vai apmaiņu pret jaunām precēm bez maksas .</p>
          <p>Ja preces nav iespējams labot vai nomainīt, Pārdevējs atdod Pircējam visus Distances līgumā paredzētos maksājumus. Pārdevējs uz patērētāja sūdzību sniedz rakstisku atbildi 15 dienu laikā.</p>
        </li>
        <li>
          <strong>Pircēja personas datu apstrāde</strong>
          <p>Internetveikals apstrādā tikai tos personas datus, kurus pircējs ir ievadījis pie preču pasūtīšanas, kā piemēram, vārds, uzvārds, e-pasts u.c.</p>
          <p>Internetveikals nodod personas datus transporta pakalpojumu sniedzējam/iem, lai nodrošinātu preču piegādi.</p>
          <p>Ja Jūs esat nepārprotami piekritis saņemt mūsu mārketinga paziņojumus, tostarp jaunumus, mēs laiku pa laikam varam sazināties ar Jums nosūtot informāciju par mūsu pakalpojumiem un jaunākajiem piedāvājumiem. Šajā nolūkā mēs varam apstrādāt Jūsu e-pasta adresi, kuru norādījāt, pierakstoties mārketinga komunikācijai. Pircējam ir iespēja atteikties no mārketinga paziņojumiem, paziņojot par to mums, rakstot uz info@fiifa.lv.</p>
        </li>
        <li>
          <strong>Strīdu izšķiršanas kārtība</strong>
          <p>Jautājumos, kas nav atrunāti šajos noteikumos un nosacījumos, Pircējs un Pārdevējs apņemas ievērot Latvijas Republikā spēkā esošos normatīvos aktus.</p>
          <p>Puses visus starp Pārdevēju un Pircēju radušos strīdus risina savstaprēju sarunu vai sarakstes ceļā. Ja strīdu neizdosies atrisinās sarunu vai sarakstes veidā, Puses strīdu risinās Latvijas Republikas tiesā, ievērojot LR normatīvos aktus. Strīdus starp Pircēju (patērētāju) un Pārdevēju var nodot risināšanai Patērētāju tiesību aizsardzības centrā vai Latvijas Republikas tiesā.</p>
          <p>Pircējam ir tiesības vērsties arī Eiropas Savienības strīdu izšķiršanas iestādēs.</p>
        </li>
      </ol>
    </div>
    <div v-else class="my-8 prose max-w-screen-lg">
      <p>
        SIA "FIFO", registration no. 43603086114, legal address Bauska county, Īslīces parish, "Kaimiņi", hereinafter - the online store - provides the content available on the website and provides goods/services in accordance with the Terms of Use outlined below.
      </p>
      <ol>
        <li>
          <strong>General terms</strong>
          <p>
            If the consumer purchases goods/services through the website, then such mutual agreement is considered a distance contract and is subject to the laws of the Republic of Latvia, which regulate the distance contract, including, but not limited to, the "Law on the Protection of Consumer Rights" of the Republic of Latvia, Latvia Regulations of the Cabinet of Ministers of the Republic "Regulations on distance contracts" etc.
          </p>
        </li>
        <li>
          <strong>Making purchases</strong>
          <p>
            The prices and specifications of the products sold in the online store are indicated next to the products.
          </p>
          <p>
            To place an order, add the desired products to the shopping cart. Fill in all the required fields and choose the most suitable delivery method. The total cost of the order with delivery is then displayed on the screen. Make payment for your purchase to complete your order.
          </p>
        </li>
        <li>
          <strong>Terms of payment</strong>
          <p>
            The settlement currency on the website is Euro. The purchase can be paid for by choosing the following payment methods provided by the payment platform makecommerce.lv, Maksekeskus AS:
          </p>
          <ul>
            <li> Latvian internet bank payments: Swedbank, SEB, Citadele and Luminor</li>
            <li>Visa/Mastercard card payments</li>
          </ul>
          <p> NB! Using the online banking payment method, confirm the order and click the "Return to merchant" button.</p>
          <p> Personal data required for making payments are transferred to the licensed payment institution Maksekeskus AS.</p>
          <p> The contract comes into force upon successful payment to the bank account of the online store. If for some reason it will not be possible to fulfill the order, the Buyer will be informed about it and the amount paid will be refunded as soon as possible, but no later than within 14 days after receiving the notification.</p>
        </li>
        <li>
          <strong>Terms of delivery</strong>
          <p>The goods are delivered to the following countries: Latvia, Lithuania, Estonia. Purchased goods are delivered using Omniva packages or received in the store. All fees and taxes that must be paid to receive the shipment at the delivery destination must be borne by the Buyer. Shipping costs are displayed before the order is confirmed. Purchased goods are delivered to the address indicated by the Buyer within 2-5 working days. In exceptional cases, we have the right to send the goods up to 45 calendar days after informing the customer.</p>
        </li>
        <li>
          <strong>Right of withdrawal</strong>
          <p>The buyer has the right to refuse the product within 14 calendar days from the moment of receiving the product. (Depending on the product, the buyer may not have a mandatory right of withdrawal, in which case the reason must be clearly indicated and explained). The right of withdrawal is not applicable if the Buyer is a legal entity.</p>
          <p>In order to use the 14-day right of withdrawal, the goods may only be used for their intended purposes, the consumer is responsible for maintaining the quality and safety of the goods during the period of exercise of the right of withdrawal. If the goods are used inappropriately or damaged, by neglecting the goods during use or not following the instructions in the instructions, if the original packaging of the goods is lost, or if its packaging is significantly damaged, the online store has the right to reduce the refundable amount according to the decrease in the value of the goods.</p>
          <p>To use the right of withdrawal, you must submit a withdrawal form, which can be found here: withdrawal form, by sending it to the e-mail address info@fiifa.lv within 14 days after receiving the goods. The buyer bears the cost of returning the product, except when the reason for the return is that the product does not correspond to the order (for example, the wrong or damaged product).</p>
          <p>The Buyer is obliged to return the Goods to the Seller without delay, but no later than within 14 days after sending the refusal form to the online store. After receiving the returned goods, the online store shall immediately, but not later than within 14 days, refund all payments received from the buyer based on the Distance Agreement.</p>
          <p>The Seller has the right to withhold payment until he has received confirmation of the return of the Goods or goods from the Buyer. If the buyer has chosen a different shipping method than the cheapest type of shipment offered in the online store, the online store is not obligated to compensate for the exceeded shipping costs.</p>
          <p>The online store is not responsible for delays in the fulfillment of obligations or their non-fulfillment, or other types of non-fulfilment, which have arisen due to circumstances and obstacles that are beyond the reasonable control of the online store.</p>
          <p>The online store reserves the right to refuse to sell the goods and to demand the return of the goods from the Buyer, if the price indicated in the online store is significantly lower than its market price due to an error.</p>
        </li>
        <li>
          <strong>Consumer rights for non-conforming goods</strong>
          <p>The online store is responsible for non-compliance of the goods sold to the Buyer with the terms of the contract or defects that occurred within 6 months after the day of delivery of the goods to the customer, or were at the time of delivery, if such an assumption does not contradict the characteristics or lack of the case. The Buyer must inform the Seller about the non-conformity of the goods immediately, within 2 months after its detection, i.e. submit a complaint. The buyer can file a complaint by contacting the online store by writing to info@fiifa.lv.</p>
          <p>The online store is not responsible for defects that occurred after the delivery of the goods to the Buyer. If the purchased goods have defects for which the Seller is responsible, the Buyer has the right to request the elimination of defects in the goods or exchange for new goods free of charge.</p>
          <p>If it is not possible to repair or replace the goods, the Seller returns to the Buyer all payments provided for in the Distance Agreement. The seller provides a written response to the consumer's complaint within 15 days.</p>
        </li>
        <li>
          <strong>Processing of personal data of the buyer</strong>
          <p>The online store processes only the personal data entered by the buyer when ordering goods, such as name, surname, e-mail, etc.</p>
          <p>The online store transfers personal data to the transport service provider(s) to ensure the delivery of goods.</p>
          <p>If you have expressly agreed to receive our marketing communications, including news, we may contact you from time to time with information about our services and the latest offers. For this purpose, we may process your email address that you provided when you signed up for marketing communications. The buyer has the option to opt out of marketing communications by notifying us by writing to info@fiifa.lv.</p>
        </li>
        <li>
          <strong>Dispute resolution procedure</strong>
          <p>In matters that are not discussed in these terms and conditions, the Buyer and the Seller undertake to comply with the laws and regulations in force in the Republic of Latvia.</p>
          <p>The parties resolve all disputes between the Seller and the Buyer through mutual negotiations or correspondence. If the dispute cannot be resolved through negotiation or correspondence, the Parties will resolve the dispute in the court of the Republic of Latvia, observing the laws and regulations of the Republic of Latvia. Disputes between the Buyer (consumer) and the Seller can be referred to the Consumer Rights Protection Center or the court of the Republic of Latvia for resolution.</p>
          <p>The buyer also has the right to appeal to the European Union dispute settlement institutions.</p>
        </li>
      </ol>
    </div>
  </div>
</template>
