<script setup lang="ts">
const { t, locale } = useI18n();
const language = locale.value;

useHead({
  title: t('messages.general.privacyPolicy'),
  meta: [{ name: 'description', content: t('messages.general.privacyPolicy') }],
});
</script>

<template>
  <div class="container my-8">
    <h1 class="mb-8 text-3xl font-semibold text-primary">{{ $t('messages.general.privacyPolicy') }}</h1>
    <div v-if="language == 'lv_LV'" class="my-8 prose max-w-screen-lg">
      <ol>
        <li>
          <strong>Vispārīgie noteikumi.</strong>
          <ol>
            <li>Šī Privātuma politika apraksta, kā SIA “FIFO”, 43603086114, Bauskas nov., Īslīces pag., “Kaimiņi” (turpmāk saukti arī – “Datu pārzinis”) iegūst, apstrādā un glabā personas datus, ko Fiifa.lv iegūst no saviem klientiem un personām, kas apmeklē interneta mājaslapu (turpmāk saukti – “Datu subjekts” vai “Jūs”).</li>
            <li>Personas dati ir jebkura informācija attiecībā uz identificētu vai identificējamu fizisku personu, t. i., Datu subjektu. Apstrāde ir jebkura ar personas datiem saistīta darbība, piemēram, iegūšana, ierakstīšana, pārveidošana, izmantošana, skatīšana, dzēšana vai iznīcināšana.</li>
            <li>Datu pārzinis ievēro likumdošanā paredzētos datu apstrādes principus un spēj apstiprināt, ka personas dati tiek apstrādāti saskaņā ar spēkā esošo likumdošanu.</li>
          </ol>
        </li>
        <li>
          <strong>Personas datu iegūšana, apstrāde un glabāšana.</strong>
          <ol>
            <li>Personu identificējošu informāciju Datu pārzinis iegūst, apstrādā un glabā, galvenokārt izmantojot internetveikala vietni un e-pastu.</li>
            <li>Apmeklējot un izmantojot internetveikalā sniegtos pakalpojumus, Jūs piekrītat, ka jebkura sniegtā informācija tiek izmantota un pārvaldīta atbilstoši Privātuma politikā noteiktajiem mērķiem.</li>
            <li>Datu subjekts ir atbildīgs par to, lai iesniegtie personas dati būtu pareizi, precīzi un pilnīgi. Apzināta nepatiesas informācijas sniegšana tiek uzskatīta par mūsu Privātuma politikas pārkāpumu. Datu subjektam ir pienākums nekavējoties paziņot Datu pārzinim par jebkurām izmaiņām iesniegtajos personas datos.</li>
            <li>Datu pārzinis nav atbildīgs par zaudējumiem, kas nodarīti Datu subjektam vai trešajām personām, ja tie radušies nepatiesi iesniegtu personas datu dēļ.</li>
          </ol>
        </li>
        <li>
          <strong>Klientu personas datu apstrāde</strong>
          <ol>
            <li>Datu pārzinis var apstrādāt šādus personas datus:
              <ol>
                <li>Vārds, uzvārds</li>
                <li>Dzimšanas datums</li>
                <li>Kontaktinformācija (e-pasta adrese un/vai tālruņa numurs)</li>
                <li>Darījuma dati (iegādātās preces, piegādes adrese, cena, maksājuma informācija u.t.t.).</li>
                <li>Jebkuru citu informāciju, kura iesniegta mums vietnes piedāvāto pakalpojumu un preču iegādes laikā vai sazinoties ar mums.</li>
              </ol>
            </li>
            <li>Papildus iepriekšminētajam, Datu pārzinim ir tiesības pārbaudīt iesniegto datu precizitāti, izmantojot publiski pieejamos reģistrus.</li>
            <li>Personas datu apstrādes juridiskais pamats ir Vispārīgās datu aizsardzības regulas 6.panta 1.punkta a), b), c) un f) apakšpunkts:
              <ol>
                <li>a) datu subjekts ir devis piekrišanu savu personas datu apstrādei vienam vai vairākiem konkrētiem nolūkiem;</li>
                <li>b) apstrāde ir vajadzīga līguma, kura līgumslēdzēja puse ir datu subjekts, izpildei vai pasākumu veikšanai pēc datu subjekta pieprasījuma pirms līguma noslēgšanas;</li>
                <li>c) apstrāde ir vajadzīga, lai izpildītu uz pārzini attiecināmu juridisku pienākumu;</li>
                <li>f) apstrāde ir vajadzīga pārziņa vai trešās personas leģitīmo interešu ievērošanai, izņemot, ja datu subjekta intereses vai pamattiesības un pamatbrīvības, kurām nepieciešama personas datu aizsardzība, ir svarīgākas par šādām interesēm, jo īpaši, ja datu subjekts ir bērns.</li>
              </ol>
            </li>
            <li>Datu pārzinis glabā un apstrādā Datu subjekta personas datus, kamēr pastāv vismaz viens no zemāk norādītajiem kritērijiem:
              <ol>
                <li>Personas dati nepieciešami tiem nolūkiem, kam tie saņemti;</li>
                <li>Kamēr ārējos normatīvajos aktos noteiktajā kārtībā Datu pārzinis un/vai Datu subjekts var realizēt savas leģitīmās intereses, kā piemēram, iesniegt iebildumus vai celt vai vest prasību tiesā;</li>
                <li>Kamēr pastāv juridisks pienākums datus glabāt, kā piemēram, saskaņā ar Grāmatvedības likumu;</li>
                <li>
                  Kamēr ir spēkā Datu subjekta piekrišana attiecīgajai personas datu apstrādei, ja nepastāv cits personas datu apstrādes likumīgs pamats.
                  <br>
                  <br>
                  Izbeidzoties šajā punktā minētajiem apstākļiem, izbeidzas arī Datu subjekta personas datu glabāšanas termiņš un visi attiecīgie personas dati tiek neatgriezeniski izdzēsti no datoru sistēmām un elektroniskajiem un/vai papīra dokumentiem, kas saturējuši attiecīgos personas datus vai arī šie dokumenti tiek anonimizēti.
                </li>
              </ol>
            </li>
            <li>Lai pildītu savas saistības pret Jums, Datu pārzinim ir tiesības nodot Jūsu personas datus sadarbības partneriem, datu apstrādātājiem, kas veic nepieciešamo datu apstrādi mūsu uzdevumā, piemēram, grāmatvežiem, kurjerdienestiem u.c. Datu apstrādātājs ir personas datu pārzinis. Maksājumu apstrādi nodrošina maksājumu platforma makecommerce.lv, tāpēc mūsu uzņēmums maksājumu izpildei nepieciešamos personas datus nodod platformas īpašniekam Maksekeskus AS.
              Pēc pieprasījuma mēs varam nodot Jūsu personas datus valsts un tiesībsargājošajām iestādēm, lai nepieciešamības gadījumā aizstāvētu savas juridiskās intereses, sastādot, iesniedzot un aizstāvot juridiskas prasības.</li>
            <li>Apstrādājot un glabājot personas datus, Datu pārzinis īsteno organizatoriskos un tehniskos pasākumus, lai nodrošinātu personas datu aizsardzību pret nejaušu vai nelikumīgu iznīcināšanu, mainīšanu, izpaušanu un jebkādu citu nelikumīgu apstrādi.</li>
          </ol>
        </li>
        <li>
          <strong>Datu subjekta tiesības</strong>
          <ol>
            <li>Saskaņā ar Vispārīgo datu aizsardzības regulu un Latvijas Republikas tiesību aktiem Jums ir tiesības:
              <ol>
                <li>Piekļūt saviem personas datiem, saņemt informāciju par to apstrādi, kā arī pieprasīt Jūsu personas datu kopiju elektroniskā formātā un tiesības uz šo datu nodošanu citam pārzinim (datu pārnesamība);</li>
                <li>Pieprasīt labot nepareizus, neprecīzus vai nepilnīgus personas datus;</li>
                <li>Dzēst savus personas datus (“tikt aizmirstam”), izņemot gadījumus, kad likums pieprasa saglabāt datus;</li>
                <li>Atsaukt savu iepriekš sniegto piekrišanu personas datu apstrādei;</li>
                <li>Ierobežot savu datu apstrādi – tiesības pieprasīt, lai mēs īslaicīgi pavisam pārtraucam apstrādāt visus Jūsu personas datus;</li>
                <li>Vērsties Datu valsts inspekcijā</li>
              </ol>
              Pieprasījumu par savu tiesību īstenošanu varat iesniegt, aizpildot formu klātienē Kalna ielā 12, Bauskā, vai arī iesūtot pieprasījumu elektroniski, rakstot uz klientu atbalsta dienesu info@fiifa.lv.
            </li>
          </ol>
        </li>
      </ol>
    </div>
    <div v-else class="my-8 prose max-w-screen-lg">
      <ol>
        <li>
          <strong>General terms.</strong>
          <ol>
            <li> This Privacy Policy describes how SIA "FIFO", 43603086114, Bauskas nov., Īslīces parish, "Kaimiņi" (hereinafter also called - "Data Controller") obtains, processes and stores personal data that Fiifa.lv obtains from its customers and to persons visiting the website (hereinafter referred to as "Data Subject" or "You").</li>
            <li> Personal data is any information relating to an identified or identifiable natural person, i.e. i.e., the data subject. Processing is any activity related to personal data, such as obtaining, recording, modifying, using, viewing, erasing or destroying.</li>
            <li> The data controller complies with the data processing principles provided for in the legislation and is able to confirm that personal data is processed in accordance with the applicable legislation.</li>
          </ol>
        </li>
        <li>
          <strong> Acquisition, processing and storage of personal data.</strong>
          <ol>
            <li> Personally identifiable information is obtained, processed and stored by the Data Controller, mainly through the website of the online store and e-mail.</li>
            <li> By visiting and using the services provided in the online store, you agree that any information provided is used and managed in accordance with the purposes set out in the Privacy Policy.</li>
            <li> The data subject is responsible for ensuring that the submitted personal data is correct, accurate and complete. Knowingly providing false information is considered a violation of our Privacy Policy. The data subject is obliged to immediately notify the Data Controller of any changes in the submitted personal data.</li>
            <li> The Data Controller is not responsible for damages caused to the Data Subject or third parties, if they occur due to falsely submitted personal data.</li>
          </ol>
        </li>
        <li>
          <strong> Processing of personal data of customers</strong>
          <ol>
            <li> The data controller may process the following personal data:
              <ol>
                <li>Name and surname</li>
                <li>Date of birth</li>
                <li> Contact information (email address and/or phone number)</li>
                <li> Transaction data (purchased goods, delivery address, price, payment information, etc.).</li>
                <li> Any other information submitted to us during the purchase of services and goods offered by the website or when communicating with us.</li>
              </ol>
            </li>
            <li>In addition to the above, the Data Controller has the right to verify the accuracy of the submitted data using publicly available registers.</li>
            <li>The legal basis for personal data processing is Article 6, Clause 1, subparagraph a), b), c) and f) of the General Data Protection Regulation:
              <ol type="a">
                <li>a) the data subject has given consent to the processing of his personal data for one or more specific purposes;</li>
                <li>b) the processing is necessary for the performance of a contract, the contracting party of which is the data subject, or for the performance of measures at the request of the data subject before the conclusion of the contract;</li>
                <li>c) the processing is necessary to fulfill a legal obligation attributable to the controller;</li>
                <li>f) processing is necessary to meet the legitimate interests of the controller or a third party, except when the interests of the data subject or the fundamental rights and freedoms that require the protection of personal data are more important than such interests, especially if the data subject is a child.</li>
              </ol>
            </li>
            <li>The Data Controller stores and processes the Data Subject's personal data as long as at least one of the following criteria is met:
              <ol>
                <li>Personal data are necessary for the purposes for which they were received;</li>
                <li>As long as the Data Manager and/or the Data Subject can realize their legitimate interests, such as submitting objections or bringing or bringing a lawsuit to court, in accordance with the procedures set forth in external regulatory acts;</li>
                <li>As long as there is a legal obligation to store data, such as under the Accounting Act;</li>
                <li>
                  As long as the Data Subject's consent to the relevant personal data processing is valid, if there is no other legal basis for personal data processing.
                  <br>
                  <br>
                  Upon termination of the conditions mentioned in this paragraph, the storage period of the Data Subject's personal data also expires and all relevant personal data are permanently deleted from computer systems and electronic and/or paper documents that contained the relevant personal data or these documents are anonymized.
                </li>
              </ol>
            </li>
            <li>In order to fulfill its obligations to you, the Data Controller has the right to transfer your personal data to cooperation partners, data processors who carry out the necessary data processing on our behalf, for example, accountants, courier services, etc. The data processor is the controller of personal data. Payment processing is provided by the payment platform makecommerce.lv, therefore our company transfers the personal data necessary for payment execution to the platform owner Maksekeskus AS. Upon request, we can transfer your personal data to state and law enforcement authorities in order to defend our legal interests, if necessary, by drafting, submitting and defending legal claims.</li>
            <li> When processing and storing personal data, the Data Controller implements organizational and technical measures to ensure the protection of personal data against accidental or illegal destruction, alteration, disclosure and any other illegal processing.</li>
          </ol>
        </li>
        <li>
          <strong>Data subject rights</strong>
          <ol>
            <li> In accordance with the General Data Protection Regulation and the laws of the Republic of Latvia, you have the right to:
              <ol>
                <li>Access your personal data, receive information about their processing, as well as request a copy of your personal data in electronic format and the right to transfer this data to another controller (data portability);</li>
                <li>Request correction of incorrect, inaccurate or incomplete personal data;</li>
                <li>Delete your personal data ("be forgotten"), except in cases where the law requires data retention;</li>
                <li>Withdraw your previously given consent to the processing of personal data;</li>
                <li>Restrict the processing of your data - the right to request that we temporarily stop processing all your personal data;</li>
                <li>Contact the Data State Inspectorate</li>
              </ol>
              You can submit a request for the exercise of your rights by filling out the form in person at Kalna Street 12, Bauska, or by sending the request electronically by writing to the customer support service at info@fiifa.lv.
            </li>
          </ol>
        </li>
      </ol>
    </div>
  </div>
</template>
