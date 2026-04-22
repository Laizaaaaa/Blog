FEB 20,2026 - FRIDAY

Around 9:00 AM, we were tasked to study Software Quality Assurance Tester through the link given by the mentor

At 5:00 PM, we tested the CCPOS system given by the staff Role: Quality Assurance Tester

(FEB 23 2026) - MONDAY

(8:30AM to 5:00PM) reviewing and doing a report notes of the issues of the POS 

(5:00pm - 7:00) overtime and submitting the report


FEB 24 2026 - TUESDAY 
Brainstorm/discussion of the flow of the POS to be developed. Inspected the restaurant’s layout and the rooms and tables, also the kitchen area. Documented the rooms and the number of tables each room. Asked staff questions about the flow of their current system and other related questions. Discussed about the current POS’s issues and possible features needed. Created a flowchart.

FEB 25 2026 - WEDNESDAY 
Developed prototype design on figma and started drafting ERD. 


FEB 26 2026 - THURSDAY 
Continuation of UI design on figma and ERD design. Further discussion on the design and database. 

FEB 27 2026 - FRIDAY 
mentor checked the ui design and discussed about the features owwner wants. Scheduled a meeting with staff and owner for the presentation of ui and their feedbackFEB 28, 2026 SATURDAY
- continue finishing ui for admin and owner

MARCH 2 - MONDAY
Final editing of UI and presentation with sir george, sir james, and sir eric. first presented the ui and flow of ordering. then they gave feedback and suggestions about the possible layout of the tables. add important details to take note such as customer age and gender, peak time sales, and other graphs to be put in dashboard. gave comments on font sizes and color coding too. and noted access for each user. after lunch, we discussed about how we would incorporate their suggestions. and then later on continued discussion with sir george about microsoft 365’s pos(?) and he showed us a sample pos from way back 2009 but we had a problem viewing its source code so the meeting ended there. to be resumed the next day.

MARCH 3 - TUESDAY
We continued working on the revised UI and then had a meeting with sir george in the afternoon about the source code of the microsoft 365’s pos. but since we weren’t able to find it, we just showed the current pos’ source code and sir george made us demonstrate it and made us note that graphs are really important in easy viewing of data. Sir george wanted to integrate. 3 different systems, for pos, accounting, and inventory. so we discussed about it and wrote in a blackboard about the users, roles, management, etc. 

MARCH 4 - WEDNESDAY
We asked sir Eric about how the accounting works, and later on we had another discussion with sir Eric and sir George about what will be included in the accounting. And so, we included their suggestions in our work and modified some UI design again.During our short break in the afternoon, we helped sir James paint the diorama about .
We continued painting while waiting for sir Ace, our mentor, to arrive. It was past 5pm when he arrived, and during our OT, we asked several questions about what we will do about the system now, but sir Ace said to focus first on the POS, and just worry about the rest later on. 

MARCH 5- THURSDAY
today we continued on designing the UI 	


MARCH 6 - FRIDAY
Today, we finalized the UI and presented it again to sir George. he had a last instructions to fix some UI and then gave us approval to being the development next weekMARCH 9 - MONDAY
We started the development of the Cynthia Curry POS. Gwyn was the one who set up the laravel project and github repository.As Gwyn and Grace started the UI/front-end, we reviewed the database table structures again and made some changes. MARCH 10 - TUESDAY
I drafted seeders for the Products, Categories, and Sub categories tables based on the original database. MARCH 11 - WEDNESDAY 
I created migrations for the Products, Categories, and Sub categories tables. As we discussed the database again, there were some changes made again in the table structure. I finalized the Product seeder to how it is in the original CCPOS database. I organized them by category instead of the original where the products are mixed, so that it will be easy to make changes later on if there were.  I also copied the product images from the original CCPOS files to out laravel project. and i commited it to the github repository so that everyone can also access those images.

MARCH 12 - THURSDAY
I made the search feature in the menu table work. and fixed some bugs regardging that said feature. i also added a no results message.


MARCH 13 - FRIDAY
fixed migration errors by  renaming them so that they are in proper order when migrating
fixed payment details calculation based on calculation done by staff

MARCH 16 - MONDAY
noticed some changes in the category seeder, specifically the category_id, which made the menu jumbled. and so i fixed the product seeder based on that changes.
also noticed current timezone is different so i changed the timezone in the app.php
made the customer_id nullable since customer name is just optional
moved some order functions to a separate controller for easier readability. some value are default values only and will be replaced y dynamic values later on 
MARCH 17 - TUESDAY
Made error message show in the pin modal when invalid pin rather than in the page
create seeders for roles, accounts, and users
fixed search feature since current is that cursor disappears after results show
used server-side category filtering rather than using js

MARCH 18 - WEDNESDAYAdded customer name suggestions in the order summary page
fixed some bugs
we discussed about the current progress and gave suggestions on minor changes.

MARCH 19 - THURSDAY
I fixed the Menucontroller and added comments for easy understanding of the code. 

MARCH 23 - MONDAY
i created a migration to add quantity to order_items table. and also add quantity as fillable to the OrderItem model. then i created the kitchen controller and started on the backend of the kitchenorders page. 

in the afternoon, we had a gmeet with out mentor, and he sent links for another mini project (UI prototype of Ordinance System) we will be working on later on. he discussed what are the features for each role, what are visible and not.  he told us to fix the design to make it better. and we suggested some ideas for it to be better

MARCH 24 - TUESDAY
we presented the progress of our POS development to sir George and sir James. and sir gorge suggested some revisions on the iu which includes when there is a franchise for the restaurant.. 

in the afternoon, i continued the development and created a migration to add ‘new’ and ‘to pay’ status in the order status. i also fixed the order status to ‘new’ instead of ‘preparing’ when order is confirmed by the waiter

then we consulted our mentor about what happendd in the presentation and he said to halt the pos development since he will talk to the own. he said we can start with the redesigning of the ordinance system while waiting for his update

MARCH 25 - WEDNESDAY
we continued to design the Ordinance System

March 26, 2026 - THURSDAY
• Conducted research by gathering official logos and pictures from the SB Manito
Facebook page.
• Processed assets in Canva to remove backgrounds for a cleaner design integration
in Figma.
• Established the website structure by drafting the primary navigation bar and banner
placeholders.
• Drafted the initial layout for the Proposed Ordinances page and the detailed
ordinance information view.

March 27, 2026 - FRIDAY
• Drafted the Regular Sessions page using real-time data and references from official
social media posts.
• Developed a dedicated overlay interface for viewing PDF text versions without leaving
the main page.
• Designed the News page layout using actual announcements as placeholder content
for realism.
• Refined the visual hierarchy and layout across the Ordinance and News sections for
better readability.

(March 28, 2026) - SATURDAY
• Added a Sessions Archive page and an integrated announcement feature for
upcoming session alerts.
• Conducted a "polishing" phase to fix alignment, spacing, and consistency issues
across all designed pages.
• Transitioned from static designs to a functional prototype by connecting interactive
flows in Figma.
• Tested the prototype flow to ensure smooth transitions between the pages

MARCH 30 - MONDAY
Today we continued developing the POS, I made the order status filter work

MARCH 31 - TUESDAY
i add the tables relationship to Order model and load that in the Kitchen Controller. then i fixed the hover issues in the order status filter, removed the ‘w/‘ in the productseeder as requested by the owner, and made the room filter dynamic instead of static so it will be easy to maintain when a new branch is added.

APRIL 6 - MONDAY
we encountered an error when running the command php artisan migrate:fresh —seed since i did rename the fist_name to first_name but forgot to change them in the UserSeeder. another error found is that when saving customer info, there is a default sex being saved to database but that was already removed in the customer table. so i also fixed that. 
then, when i went to kitchenorders page again, i noticed that there’s a redundant no orders found, 1 for no data yet in orders table, and 1 for no order yet in a specific room. i removed the former. 
then, i made the  status indicator in the order card update live when updating the order item status in the order details panel. so that there is no more need to refresh the page
then i fixed the bug item duplication in the order card. insead of showing specific items only under the order type, it iterates thorough all order items again that is why it was duplicated. 
then i grouped items by type in the order details panel since the previous one was just showing all items

in the afternoon, i fixed several bugs i found.
then, i also made the status badge to update live (new to in progress) if 1 order item’s status is updated to preparing.
i also added a white background color to the stick table header in the orders card to prevent items from apperaing behind them when scrolling

APRIL 7 - TUESDAY
sir george gave us the tablets to be used by Cynthia Curry staff, specifically waiters who will take customer’s orders.
we were quite surprised as we thought they will be using tablets years later, not now. so, we were troubled because we focused on laptop screen size (as was mentioned before). i guess there was some misunderstanding. and it was somewhat our fault for not clarifying it.
so, we focused on fixing the ui to fit it in the screensize of the tablet (fire 7)(600x1024). we used gwyn’s laptop as temporary server to test our currently developed system

in the afternoon, i also used my own laptop so that i can also see what my changes will look and function in the tablet. 

we discussed what would make the pos better. i, as suggested by grace, gave a color coding to the table numbers for each room. and, as suggested by gwyn, i added an All Rooms option in the room filter and made it default instead of Main Dining.

then, later on, i worked on live update of the kitchenorders page so that after confirmation of order by staff, it will automatically show in the page without needing to refresh the page. i searched and watched videos, but i had difficulty in using websocket. it did not work. so i just used polling instead. it will ask the server every 2 seconds if there is a new order. i know this is not the best idea, but it will just be temporary.

after that, i tested the process of ordering in the tablet again. i noticed that when inputting pin in the confirm modal, it shows default keypad with letters, but the pin consists of numbers only. so i changed that. and also, i made it possible so that user can  also hit enter key instead of clicking the confirm button. 

APRIL 8 - WEDNESDAY
we did a quality assurance test on a system given to us. we found a few things that could be better. we also checked the source code
we continued working on the pos system. i started to work on cashier’s orders page. i modified the ui, then using the device to be used by the cashier of the restaurant, i tested the ui to see if page is too big for the device. so i adjusted it so that it will fit perfectly

APRIL 9 - THURSDAY 
I continued working on the orders page’s ui, i also made it closesr to how the billout page look so that all pages of cashier would look consistent. 
in the afternoon, i started to work on the backend. since it is similar to the kitchenorders page, i just copied some logic and then modified them a bit. 

APRIL 10 - FRIDAY
i created a migration to add spice_level cliumn to order_items table. i made it nullable since only curry items have the spice_level. next, Ifixed the Order Controller so that it would save the spice_level to the databse. then, i also made the spice_level show in orders page’s card and ui 

in the afternoon, i continued working on orders page’s backend. since i already finished most of the features, the only thing left is the cancel/void feature. and so, i worked on that. i also added a success modal when items are succesfully cancelled. then, i also added the live polling every 2 seconds so that after confirmation of order by waiter, it would also show in orders page jsut like in the kitchenorders page. i also made it so that ui will immediately update after cancelling item. 

APRIL 11 - SATURDAY
i added backend to the billout page. made the info dynamic.made the numpad disabled until cash btn is clicked. made the gcash btn disabled when cash is cliced. made the discount work, whole order and selected item. made the discounted item and amount show
made the change automatically be computed upon cash entry
added success and error messagescreated migrations and models to modify some table and save data to database.
fixed some bug encountered along the way

APRIL 12 - SUNDAY
i continued working on the billout page, i fixed some bugs encountered, especially on discount feature,add validation for discounted item to match no of persons, added a confirm pin modal for completing order and saving the payment to db, modified my teammates work on receipt to still include cancelled orders . made sure that menu is not accessible without tables yet to avoid problems later on.  i included all order status to orders page since this one is for cashier and should be able to do so, then i updated order status to cancelled if all items are cancelleed. and only enable the bill out btn when order status is “Served”
 
APRIL 13 - MONDAY
we finalized some features and fixed bugs encounteredin the afternoon, we set up the system in the Cynthia Curry restaurant with our mentor.  we did not get to try the printing so it took us some time to adjust the print layout and paper size and font weight and colors too. since it was jsut black and white, some colors are not visible when printed. 

then, we asked for some staff to teach them how the system will work. we allowed them to test it and asked for their feedback. we then tested it on different devices such as tablet and laptop. 

we had a huge problem, and that was the internet. it was so slow so the loading of pages were also slow. 

we tried it when there was already a customer and it was the same, it was so slow and there were still several bugs encountered so we quite panicked. in the end, we suggested to delay the beta testing to tomorrow and fix those bugs first.


APRIL 14 - TUESDAY
continued to fix the bugs found during the testing yesterday.
then we tried testting it again but still so slow.
in the afternoon, we tried to upload all images to cloud and just use fetch it using the link. we encountered error and found out that it was a compatibility issue. but after an hour or two, we managed to make it work. we modified the code for the adding and editing of new prod, and where it uses images. then, we then tried to add and edit products in the admin’s side but it did not show in the menu. that’s when i found that in the menucontroller the menu items are hardcoded so i refactored it to make it dynamic. i also modified the category and product seeders. 


APRIL 15 - WEDNESDAY
we tried to clean our code to make it perform faster. i tried to optimize it bb Adding indexes for frequently queried columns to speed up searches. in the afternoon, we tried to test it again on the actual devices to be used by the staff. but still, because of slow internet connection. the system was not working well.

APRIL 16 - THURSDAY 
We tried to deploy the system using ngrok. it was working fine, and the system was responding quite well, no really long delays. we also showed a core staff (also an IT/ system developer for Pacific Blue) to test the system and ask for his feedback. and we explained it again to the Cynthia Curry staff (different batch from the previous staffs), and they gave us feedback and suggestions on what to improve to make it easier for them. one was to remove the confirm pin from the orders, and to use cashier name rather than server name on the receipt. and again, there was confusion with the discounts, we decided to ask sir Eric (accountant of PB) the next day. we consulted our mentor about the removal of confirmation pin but he said not to remove ito track who took customer orders. but after a few hours of using ngrok, it suddenly showed error, maybe because we just used the free tier only. 

APRIL 17 - FRIDAY
We continued to fix bugs encountered. we also consulted sir james and sir eric about the discount and what the sales page will show for the admin side. 
in the afternoon, we tried to use other web host provider, while waiting for our mentor to give us the hostinger acc to be used. 










